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
  return (
    <div style={{ width: '100vw', height: '40vh' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense>
          <Text3D
            url="https://api.fontsource.org/v1/fonts/lora/latin-700-normal.ttf"
            height={0.5}
            curveSegments={32}
            bevelEnabled
            bevelSegments={12}
            size={3}
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
