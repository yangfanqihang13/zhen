import { motion } from "framer-motion";
import BracketViewer from "./BracketViewer";
import ImageLightbox from "./ImageLightbox";
import structureLever from "@/assets/structure-lever.jpg";
import structureColumns from "@/assets/structure-columns.jpg";
import structurePlan from "@/assets/structure-plan.jpg";
import structureDetail from "@/assets/structure-detail.jpg";
import structureDimensions from "@/assets/structure-dimensions.jpg";
import structureDougong from "@/assets/structure-dougong.jpg";
import structureTenon from "@/assets/structure-tenon.jpg";

const bracketModels = [
  {
    modelPath: "/models/corner-bracket.glb",
    name: "角科斗拱",
    desc: "位于建筑转角处的斗拱构件，承接两个方向的檐部荷载，结构最为复杂，是斗拱体系中技术难度最高的部分。",
  },
  {
    modelPath: "/models/corner-bracket-2.glb",
    name: "角科斗拱（变体）",
    desc: "转角斗拱的另一种形制，因位置与受力不同而在出跳数、昂的角度上有所调整，体现了匠人因地制宜的智慧。",
  },
  {
    modelPath: "/models/intermediate-bracket.glb",
    name: "平身科斗拱",
    desc: "位于两柱之间额枋上的斗拱，数量最多、分布最密，是屋檐出挑的主要支撑单元，决定了檐部的整体韵律。",
  },
  {
    modelPath: "/models/small-intermediate.glb",
    name: "小型平身科",
    desc: "尺度较小的平身科斗拱，常见于次要檐部或装饰性较强的位置，出跳层数少但形制完整，精巧玲珑。",
  },
  {
    modelPath: "/models/column-top-ang.glb",
    name: "带昂的柱头科",
    desc: "安装在柱头之上的斗拱，带有下昂构件。昂是斜向伸出的杠杆，利用内部屋顶重量挑起外檐，是真武阁「杠杆式斗拱」的核心体现。",
  },
];

const diagramImages = [
  { src: structureLever, alt: "杠杆式斗拱榫卯结构解析", caption: "杠杆式斗拱榫卯" },
  { src: structureColumns, alt: "悬空柱与挑梁结构", caption: "悬空柱与挑梁体系" },
  { src: structurePlan, alt: "中层平面柱网布局", caption: "中层平面柱网" },
  { src: structureDimensions, alt: "三层尺寸标注", caption: "三层尺寸总览（总高19.8m）" },
  { src: structureDougong, alt: "三层斗拱形制对比", caption: "各层斗拱形制" },
  { src: structureTenon, alt: "胆形瓜柱与燕尾榫", caption: "馒头榫与燕尾榫细节" },
  { src: structureDetail, alt: "纯木无钉结构特点", caption: "结构特点总览" },
];

const BracketGallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-16 md:mt-24"
    >
      <h3 className="text-paper font-serif-cn text-xl md:text-2xl font-bold text-center mb-2">
        结构图解与斗拱模型
      </h3>
      <p className="text-muted-foreground font-sans-cn text-sm text-center mb-8">
        杠杆式斗拱 · 悬空柱体系 · 三层尺寸 · 榫卯细节 · 3D 交互模型
      </p>

      {/* Paired diagram + 3D model rows */}
      <div className="space-y-6">
        {/* Row 1: Lever diagram + 带昂的柱头科 (the ang/lever bracket) */}
        <div className="grid md:grid-cols-2 gap-4">
          <DiagramCard img={diagramImages[0]} index={0} />
          <BracketCard model={bracketModels[4]} index={1} />
        </div>

        {/* Row 2: Dougong forms + 平身科斗拱 + 角科斗拱 */}
        <div className="grid md:grid-cols-3 gap-4">
          <DiagramCard img={diagramImages[4]} index={2} />
          <BracketCard model={bracketModels[2]} index={3} />
          <BracketCard model={bracketModels[0]} index={4} />
        </div>

        {/* Row 3: Tenon detail + 小型平身科 + 角科斗拱2 */}
        <div className="grid md:grid-cols-3 gap-4">
          <DiagramCard img={diagramImages[5]} index={5} />
          <BracketCard model={bracketModels[3]} index={6} />
          <BracketCard model={bracketModels[1]} index={7} />
        </div>

        {/* Row 4: Remaining diagrams */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 6].map((idx, i) => (
            <DiagramCard key={idx} img={diagramImages[idx]} index={8 + i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiagramCard = ({ img, index }: { img: typeof diagramImages[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="rounded-lg overflow-hidden border border-border bg-card group"
  >
    <ImageLightbox src={img.src} alt={img.alt}>
      <div className="overflow-hidden">
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
    </ImageLightbox>
    <p className="text-muted-foreground font-sans-cn text-xs text-center py-3">
      {img.caption}
    </p>
  </motion.div>
);

const BracketCard = ({ model, index }: { model: typeof bracketModels[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="rounded-lg overflow-hidden border border-border bg-card"
  >
    <BracketViewer modelPath={model.modelPath} height="220px" />
    <div className="px-4 py-3">
      <h4 className="text-paper font-serif-cn text-sm font-bold mb-1">{model.name}</h4>
      <p className="text-muted-foreground font-sans-cn text-xs leading-relaxed">{model.desc}</p>
    </div>
  </motion.div>
);

export default BracketGallery;
