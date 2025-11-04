'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Environment } from '@react-three/drei'

export default function Scene() {
    return (
        <Canvas style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
          }}>
            <directionalLight
                intensity={3}
                position={[0, 3, 2]}
            />
            <Environment preset='sunset' />
            <Model />
        </Canvas>
    )
}