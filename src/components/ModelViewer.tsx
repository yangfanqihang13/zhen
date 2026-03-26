import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Html, Center } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";

const PLYModel = () => {
  const geometry = useLoader(PLYLoader, "/models/zhenwuge.ply");

  const processedGeometry = useMemo(() => {
    geometry.computeVertexNormals();
    geometry.center();

    // Scale to fit nicely in view
    geometry.computeBoundingBox();
    const box = geometry.boundingBox!;
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 4 / maxDim;
    geometry.scale(scale, scale, scale);

    return geometry;
  }, [geometry]);

  const hasColors = processedGeometry.attributes.color !== undefined;

  return (
    <mesh geometry={processedGeometry}>
      <meshStandardMaterial
        vertexColors={hasColors}
        color={hasColors ? undefined : "#a1887f"}
        roughness={0.6}
        metalness={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const PointCloudModel = () => {
  const geometry = useLoader(PLYLoader, "/models/zhenwuge.ply");

  const processedGeometry = useMemo(() => {
    geometry.computeVertexNormals();
    geometry.center();

    geometry.computeBoundingBox();
    const box = geometry.boundingBox!;
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 4 / maxDim;
    geometry.scale(scale, scale, scale);

    return geometry;
  }, [geometry]);

  const hasColors = processedGeometry.attributes.color !== undefined;

  return (
    <points geometry={processedGeometry}>
      <pointsMaterial
        vertexColors={hasColors}
        color={hasColors ? undefined : "#d4c5a9"}
        size={0.015}
        sizeAttenuation
      />
    </points>
  );
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
        camera={{ position: [5, 4, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
          <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#d4c5a9" />
          <pointLight position={[0, 5, 0]} intensity={0.5} color="#8b7355" />

          <Center>
            {/* Try mesh first; if faces exist it renders as mesh, otherwise points */}
            <PLYModel />
          </Center>

          <ContactShadows
            position={[0, -2.1, 0]}
            opacity={0.4}
            scale={12}
            blur={2}
            far={6}
          />
          <Environment preset="sunset" />
          <OrbitControls
            enablePan={false}
            minDistance={3}
            maxDistance={15}
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
