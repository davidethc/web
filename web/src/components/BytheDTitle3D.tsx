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
  const canvasHeight = isMobile ? '28vh' : '40vh';
  const textSize = isMobile ? 1.7 : 3;
  const textHeight = isMobile ? 0.3 : 0.5;

  return (
    <div className="w-screen" style={{ height: canvasHeight }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
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
