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
      <Text3DBase font={font} {...props}>
        {children}
        <meshStandardMaterial color="#00eaff" roughness={0.4} />
      </Text3DBase>
    </Center>
  );
}

export default function BytheDTitle3D() {
  // Responsivo: altura y tamaño del texto según el ancho de pantalla
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const textSize = isMobile ? 2.2 : 5.5;
  const textHeight = isMobile ? 0.7 : 1;

  return (
    <div className="w-screen flex items-start justify-center mt-6" style={{ minHeight: 0, marginBottom: 0 }}>
      <Canvas style={{ height: 'auto', width: '100%', minHeight: 0 }} camera={{ position: [0, 0, 10], fov: 60 }}>
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
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
