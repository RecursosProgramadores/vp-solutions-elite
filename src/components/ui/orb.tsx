import { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Mesh, Program, Geometry } from 'ogl';

interface OrbProps {
  hue?: number;
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  forceHoverState?: boolean;
  className?: string;
}

const vertex = `
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = `
  precision highp float;
  uniform float uTime;
  uniform float uHue;
  uniform float uHover;
  varying vec2 vUv;

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float dist = length(uv);
    
    // Dynamic organic movement
    float noise = sin(dist * 5.0 - uTime * 3.0) * 0.15;
    float movement = noise * (1.0 + uHover);
    
    // Much sharper mask for better visibility
    float mask = smoothstep(0.85 + movement, 0.1, dist);
    
    // Bright, vibrant color
    float hue = uHue / 360.0;
    vec3 color = hsv2rgb(vec3(hue, 0.85, 1.0));
    
    // Add inner glow/white core based on hover
    color = mix(color, vec3(1.0), (1.0 - dist) * 0.4 * uHover);
    
    // Final alpha with glow falloff
    float alpha = mask * (0.6 + uHover * 0.4);
    
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

export function Orb({
  hue = 200,
  hoverIntensity = 0.5,
  rotateOnHover = true,
  forceHoverState = false,
  className = ""
}: OrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverValue = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    gl.canvas.style.display = 'block';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    containerRef.current.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 35 });
    camera.position.z = 5;

    const scene = new Transform();

    // Plane geometry covers the quad
    const geometry = new Geometry(gl, {
      position: { size: 3, data: new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0]) },
      uv: { size: 2, data: new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]) },
      index: { data: new Uint16Array([0, 1, 2, 1, 3, 2]) },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uHue: { value: hue },
        uHover: { value: 0 },
      },
      transparent: true,
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    const handleResize = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      renderer.setSize(clientWidth, clientHeight);
      camera.perspective({ aspect: clientWidth / clientHeight });
    };

    const handleMouseEnter = () => { if (!forceHoverState) hoverValue.current = 1; };
    const handleMouseLeave = () => { if (!forceHoverState) hoverValue.current = 0; };

    containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    handleResize();

    let requestIds: number;
    let currentHoverValue = 0;

    const update = (time: number) => {
      requestIds = requestAnimationFrame(update);
      
      program.uniforms.uTime.value = time * 0.001;
      
      const targetHover = (forceHoverState ? 1 : hoverValue.current) * hoverIntensity;
      currentHoverValue += (targetHover - currentHoverValue) * 0.1; // Smooth transition
      program.uniforms.uHover.value = currentHoverValue;
      
      if (rotateOnHover) {
        mesh.rotation.z += 0.005 + currentHoverValue * 0.02;
      } else {
        mesh.rotation.z += 0.005;
      }
      
      renderer.render({ scene, camera });
    };

    requestIds = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(requestIds);
      if (containerRef.current && gl.canvas.parentNode) {
        containerRef.current.removeChild(gl.canvas);
      }
    };
  }, [hue, hoverIntensity, rotateOnHover, forceHoverState]);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
}
