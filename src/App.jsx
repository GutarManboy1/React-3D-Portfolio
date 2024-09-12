import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry />
      <meshStandardMaterial color={0x5F9EA0} emissive={0x5F9EA0} />
    </mesh>
  )
}
const App = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />

      <color attach="background" args={['#F0F0F0']} /> 
      {/* args is an array and as a hexidecimal color is stored within a string */}

      <RotatingCube />
      {/* this cube is declared above */}
    </Canvas>
  )
}

export default App;