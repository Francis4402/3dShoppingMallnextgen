"use client"

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Cube = ({position, size, color}) => {
    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta
    })

    return (
        <mesh position={position} ref={ref}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}


const Hero = () => {

  return (
    <div className='w-full h-[600px] mt-10'>
        <Canvas>
            <ambientLight intensity={0.7} />
            <directionalLight color="blue" position={[0, 0, 5]} intensity={3} />
            
            <Cube position={[0, 2, 0]} size={[2,2,2]} color={"blue"} />
            <Cube position={[-2, 0, 0]} size={[2,2,2]} color="red" />
            <Cube position={[2, 0, 0]} size={[2,2,2]} color={"yellow"} />
        </Canvas>
    </div>
  )
}

export default Hero