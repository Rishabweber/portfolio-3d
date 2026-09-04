import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x0f172a, 0)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    // Create floating geometric shapes
    const shapes = []

    // Central sphere with glow
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.5,
      metalness: 0.7,
      roughness: 0.2,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)
    shapes.push({ mesh: sphere, speed: 0.003 })

    // Floating cubes
    for (let i = 0; i < 3; i++) {
      const boxGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8)
      const boxMaterial = new THREE.MeshStandardMaterial({
        color: 0x7dd3fc,
        emissive: 0x0284c7,
        emissiveIntensity: 0.2,
        metalness: 0.6,
        roughness: 0.3,
      })
      const box = new THREE.Mesh(boxGeometry, boxMaterial)
      box.position.x = (Math.random() - 0.5) * 8
      box.position.y = (Math.random() - 0.5) * 8
      box.position.z = (Math.random() - 0.5) * 3
      scene.add(box)
      shapes.push({ mesh: box, speed: 0.002 + Math.random() * 0.002 })
    }

    // Floating octahedrons
    for (let i = 0; i < 2; i++) {
      const octaGeometry = new THREE.OctahedronGeometry(0.6)
      const octaMaterial = new THREE.MeshStandardMaterial({
        color: 0x0ea5e9,
        emissive: 0x0ea5e9,
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.2,
      })
      const octa = new THREE.Mesh(octaGeometry, octaMaterial)
      octa.position.x = (Math.random() - 0.5) * 10
      octa.position.y = (Math.random() - 0.5) * 8
      octa.position.z = (Math.random() - 0.5) * 4
      scene.add(octa)
      shapes.push({ mesh: octa, speed: 0.0015 + Math.random() * 0.0015 })
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x0ea5e9, 2, 100)
    pointLight1.position.set(5, 5, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x7dd3fc, 1.5, 100)
    pointLight2.position.set(-5, -5, 5)
    scene.add(pointLight2)

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      shapes.forEach((shape) => {
        shape.mesh.rotation.x += shape.speed
        shape.mesh.rotation.y += shape.speed * 1.5
        shape.mesh.position.y += Math.sin(Date.now() * 0.001) * 0.01
      })

      // Camera parallax
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth
      const height = containerRef.current?.clientHeight || window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
