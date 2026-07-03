"use client"

import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { cn } from "@/lib/utils"

interface CyberGridProps {
  className?: string
  gridDensity?: number
  speed?: number
  primaryColor?: [number, number, number] // RGB normalized (0-1)
  secondaryColor?: [number, number, number] // RGB normalized (0-1)
}

export function CyberGrid({
  className,
  gridDensity = 10.0,
  speed = 0.2,
  primaryColor = [0.1, 0.5, 1.0], // Cyan/Blue
  secondaryColor = [1.0, 0.2, 0.8], // Pink/Magenta
}: CyberGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1) Renderer, Scene, Camera, Clock
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const clock = new THREE.Clock()

    // 2) GLSL Shaders
    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      uniform float uGridDensity;
      uniform float uSpeed;
      uniform vec3 uPrimaryColor;
      uniform vec3 uSecondaryColor;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233)))
                     * 43758.5453123);
      }

      void main() {
        // normalize coords around center
        vec2 uv    = (gl_FragCoord.xy - 0.5 * iResolution.xy)
                     / iResolution.y;
        vec2 mouse = (iMouse - 0.5 * iResolution.xy)
                     / iResolution.y;

        float t         = iTime * uSpeed;
        float mouseDist = length(uv - mouse);

        // warp effect around mouse
        float warp = sin(mouseDist * 20.0 - t * 4.0) * 0.1;
        warp *= smoothstep(0.4, 0.0, mouseDist);
        uv += warp;

        // grid lines
        vec2 gridUv = abs(fract(uv * uGridDensity) - 0.5);
        float line  = pow(1.0 - min(gridUv.x, gridUv.y), 50.0);

        // base grid color pulsing
        vec3 color     = uPrimaryColor
                       * line
                       * (0.5 + sin(t * 2.0) * 0.2);

        // energetic pulses along grid
        float energy = sin(uv.x * 20.0 + t * 5.0)
                     * sin(uv.y * 20.0 + t * 3.0);
        energy = smoothstep(0.8, 1.0, energy);
        color += uSecondaryColor * energy * line;

        // glow around mouse
        float glow = smoothstep(0.1, 0.0, mouseDist);
        color += vec3(1.0) * glow * 0.5;

        // subtle noise
        color += random(uv + t * 0.1) * 0.05;

        gl_FragColor = vec4(color, 1.0);
      }
    `

    // 3) Uniforms, Material, Mesh
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse: {
        value: new THREE.Vector2(
          window.innerWidth / 2,
          window.innerHeight / 2
        ),
      },
      uGridDensity: { value: gridDensity },
      uSpeed: { value: speed },
      uPrimaryColor: { value: new THREE.Vector3(...primaryColor) },
      uSecondaryColor: { value: new THREE.Vector3(...secondaryColor) },
    }

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // 4) Resize handler
    const onResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.iResolution.value.set(width, height)
    }
    window.addEventListener("resize", onResize)
    onResize() // set initial size

    // 5) Mouse handler
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      uniforms.iMouse.value.set(
        e.clientX - rect.left,
        rect.height - (e.clientY - rect.top)
      )
    }
    window.addEventListener("mousemove", onMouseMove)

    // 6) Animation loop
    let animationFrameId: number
    const animate = () => {
      uniforms.iTime.value = clock.getElapsedTime()
      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // 7) Cleanup on unmount
    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(animationFrameId)

      const canvas = renderer.domElement
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }

      material.dispose()
      geometry.dispose()
      renderer.dispose()
    }
  }, [gridDensity, speed, primaryColor, secondaryColor])

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full relative overflow-hidden", className)}
      aria-label="Cybernetic Grid animated background"
    />
  )
}
