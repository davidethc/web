import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D as Text3DBase, OrbitControls, Center } from '@react-three/drei';
import { suspend } from 'suspend-react';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';

function Text3D({ url, children, ...props }: any) {
  const font = suspend(() => {
    const loader = new TTFLoader();
    return new Promise((resolve) => {
      loader.load(url, resolve);
    });
  }, [url]);

  return (
    <Center>
      <group>
        {/* Capa principal del texto */}
        <Text3DBase font={font} {...props}>
          {children}
          <meshPhysicalMaterial
            color="#00eaff"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive="#00eaff"
            emissiveIntensity={0.5}
            toneMapped={false}
          />
        </Text3DBase>

        {/* Capa de brillo (glow) */}
        <Text3DBase 
          font={font} 
          {...props}
          position={[0, 0, -0.1]}
        >
          {children}
          <meshBasicMaterial
            color="#00eaff"
            transparent
            opacity={0.3}
            toneMapped={false}
          />
        </Text3DBase>
      </group>
    </Center>
  );
}

export default function BytheDTitle3D() {
  // Responsivo: altura y tamaño del texto según el ancho de pantalla
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const textSize = isMobile ? 2.2 : 8.5;
  const textHeight = isMobile ? 0.7 : 1;

  return (
    <div className="w-screen flex items-center justify-center" style={{ minHeight: '40vh', margin: 0 }}>
      <Canvas style={{ height: '40vh', width: '100%' }} camera={{ position: [0, 0, 15], fov: 50 }}>
        <Suspense>
          <Text3D
            url="/Arvo-Regular.ttf"
            height={textHeight}
            curveSegments={32}
            bevelEnabled
            bevelSegments={12}
            size={textSize}
          >
            BYTHE D
          </Text3D>
        </Suspense>
        <pointLight position={[0, 5, 10]} intensity={1} />
        <ambientLight intensity={0.3} />
        <OrbitControls 
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 2} // Bloquea rotación vertical (arriba/abajo)
          maxPolarAngle={Math.PI / 2} // Bloquea rotación vertical (arriba/abajo)
          enablePan={false} // Deshabilita el paneo
          rotateSpeed={0.5} // Reduce la velocidad de rotación
        />
      </Canvas>
    </div>
  );
}
