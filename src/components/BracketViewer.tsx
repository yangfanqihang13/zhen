import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center, Html } from "@react-three/drei";
import { Suspense } from "react";

interface BracketViewerProps {
  modelPath: string;
  height?: string;
}

const BracketModel = ({ path }: { path: string }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

const LoadingFallback = () => (
  <Html center>
    <div className="text-paper font-serif-cn text-sm animate-pulse">加载中...</div>
  </Html>
);

const BracketViewer = ({ modelPath, height = "250px" }: BracketViewerProps) => {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-border bg-card" style={{ height }}>
      <Canvas camera={{ position: [3, 2, 3], fov: 40 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.6} color="#f5e6d3" />
          <directionalLight position={[5, 8, 5]} intensity={1.2} color="#fff5e0" />
          <directionalLight position={[-3, 4, -3]} intensity={0.5} color="#d4a574" />
          <pointLight position={[0, -2, 0]} intensity={0.3} color="#a67c52" />
          <Center>
            <BracketModel path={modelPath} />
          </Center>
          <Environment preset="sunset" environmentIntensity={0.8} />
          <OrbitControls
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            minDistance={1.5}
            maxDistance={8}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Suspense>
      </Canvas>
      <div className="relative -mt-6 text-center">
        <p className="text-muted-foreground text-xs font-sans-cn">拖拽旋转 · 滚轮缩放</p>
      </div>
    </div>
  );
};

export default BracketViewer;
