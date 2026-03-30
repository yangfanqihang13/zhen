import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html, Center, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const GLBModel = () => {
  const { scene } = useGLTF("/models/zheng.glb");
  return <primitive object={scene} />;
};

const LoadingFallback = () => (
  <Html center>
    <div className="text-paper font-serif-cn text-lg animate-pulse">
      模型加载中...
    </div>
  </Html>
);

const ModelViewer = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 2.5, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
          <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#d4c5a9" />
          <pointLight position={[0, 5, 0]} intensity={0.5} color="#8b7355" />

          <Center>
            <group scale={0.15}>
              <GLBModel />
            </group>
          </Center>

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={6}
          />
          <OrbitControls
            enablePan={false}
            minDistance={2}
            maxDistance={12}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
