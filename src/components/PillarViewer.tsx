import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Center } from "@react-three/drei";
import { Suspense } from "react";

const PillarModel = () => {
  const { scene } = useGLTF("/models/jingganzhu.glb");
  return <primitive object={scene} scale={0.49} />;
};

const LoadingFallback = () => (
  <Html center>
    <div className="text-paper font-serif-cn text-sm animate-pulse">加载中...</div>
  </Html>
);

const PillarViewer = () => {
  return (
    <div className="w-full h-[350px] md:h-[420px] rounded-lg overflow-hidden border border-border bg-card">
      <Canvas camera={{ position: [0, 0, 3], fov: 40 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.6} color="#f5e6d3" />
          <directionalLight position={[5, 8, 5]} intensity={1.2} color="#fff5e0" />
          <directionalLight position={[-3, 4, -3]} intensity={0.5} color="#d4a574" />
          <directionalLight position={[0, 3, -5]} intensity={0.3} color="#c9956b" />
          <pointLight position={[0, -2, 0]} intensity={0.3} color="#a67c52" />
          <Center>
            <PillarModel />
          </Center>
          <OrbitControls
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            minDistance={1}
            maxDistance={8}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Suspense>
      </Canvas>
      <div className="relative -mt-8 text-center">
        <p className="text-muted-foreground text-xs font-sans-cn">拖拽旋转 · 滚轮缩放</p>
      </div>
    </div>
  );
};

useGLTF.preload("/models/jingganzhu.glb");

export default PillarViewer;
