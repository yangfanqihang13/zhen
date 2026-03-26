import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BracketViewer from "./BracketViewer";
import ImageLightbox from "./ImageLightbox";
import structureLever from "@/assets/structure-lever.jpg";
import structureColumns from "@/assets/structure-columns.jpg";
import structurePlan from "@/assets/structure-plan.jpg";
import structureDetail from "@/assets/structure-detail.jpg";
import structureDimensions from "@/assets/structure-dimensions.jpg";
import structureDougong from "@/assets/structure-dougong.jpg";
import structureTenon from "@/assets/structure-tenon.jpg";

/* ── Data ── */

const layers = [
  {
    layer: "底层",
    title: "如意斗拱 + 平身科",
    details: [
      "三面用网状如意斗拱（斜拱交织成网），出两跳，密排如织，装饰性极强",
      "正面开敞，用插拱（直接插于柱上），简洁通透",
    ],
    role: "承托底层屋檐，形成厚重基座感",
    icon: "一",
    // associated 3D model + diagram
    model: {
      modelPath: "/models/intermediate-bracket.glb",
      name: "平身科斗拱",
      desc: "位于两柱之间额枋上的斗拱，数量最多、分布最密，是屋檐出挑的主要支撑单元。",
    },
    diagram: { src: structureDougong, alt: "三层斗拱形制对比", caption: "各层斗拱形制" },
  },
  {
    layer: "二层",
    title: "插拱 + 杠杆核心",
    details: [
      "出三跳，以插拱为主，拱尾穿过檐柱、插入悬空金柱",
      "是杠杆系统的关键层：拱头挑出2.1米长檐，拱尾向上托举四根悬空柱",
      "无左右横枋联系，全靠斜向受力，结构极精简",
    ],
    role: "杠杆平衡系统的核心，实现悬空承重",
    icon: "二",
    model: {
      modelPath: "/models/column-top-ang.glb",
      name: "带昂的柱头科",
      desc: "带有下昂构件的柱头斗拱。昂是斜向伸出的杠杆，利用屋顶重量挑起外檐，是杠杆式斗拱的核心。",
    },
    diagram: { src: structureLever, alt: "杠杆式斗拱榫卯结构解析", caption: "杠杆式斗拱榫卯" },
  },
  {
    layer: "三层",
    title: "带假昂的出跳斗拱",
    details: [
      "出四跳，第一跳华拱，上三跳为假昂（仅作昂嘴造型，实为水平拱）",
      "挑檐最短（1.75米），收束屋顶，形成「上收下放」的优美轮廓",
    ],
    role: "收束屋顶，塑造飞扬轮廓",
    icon: "三",
    model: {
      modelPath: "/models/small-intermediate.glb",
      name: "小型平身科",
      desc: "尺度较小的平身科斗拱，出跳层数少但形制完整，精巧玲珑。",
    },
    diagram: { src: structureTenon, alt: "馒头榫与燕尾榫细节", caption: "馒头榫与燕尾榫细节" },
  },
];

const cornerModels = [
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
];

const additionalDiagrams = [
  { src: structureDimensions, alt: "三层尺寸标注", caption: "三层尺寸总览（总高19.8m）" },
  { src: structureColumns, alt: "悬空柱与挑梁结构", caption: "悬空柱与挑梁体系" },
  { src: structurePlan, alt: "中层平面柱网布局", caption: "中层平面柱网" },
  { src: structureDetail, alt: "纯木无钉结构特点", caption: "结构特点总览" },
];

const uniqueValues = [
  { label: "岭南风格", text: "多用插拱（非柱头坐斗），出跳长、拱身简洁，区别于清式繁复", icon: "南" },
  { label: "结构至上", text: "斗拱以受力优先，装饰为辅，是明代南方木构的活标本", icon: "构" },
  { label: "杠杆原理", text: "全球罕见的斗拱杠杆平衡系统，实现「悬空承重」的建筑奇迹", icon: "杠" },
];

/* ── Component ── */

const DougongSection = () => {
  const [activeLayer, setActiveLayer] = useState(1); // default to 二层 (the most impressive)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 md:mt-24"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-gold/60 font-sans-cn text-xs tracking-[0.5em] uppercase">
          Dougong System
        </span>
        <h3 className="text-paper font-serif-cn text-2xl md:text-3xl font-bold mt-2 mb-3">
          斗拱：岭南木构的巅峰智慧
        </h3>
        <p className="text-muted-foreground font-sans-cn text-sm max-w-2xl mx-auto leading-relaxed">
          斗拱是真武阁的结构心脏，既是承重、挑檐、抗震的关键，也是悬空柱奇迹的实现者。
        </p>
        <div className="ink-divider w-24 mx-auto mt-6" />
      </div>

      {/* Interactive layer selector tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {layers.map((l, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveLayer(i)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-6 py-3 rounded-lg font-serif-cn text-sm font-bold transition-all duration-500
              ${activeLayer === i
                ? "bg-gold/15 text-gold border border-gold/40 shadow-[0_0_20px_hsl(35_30%_45%/0.15)]"
                : "bg-card border border-border text-muted-foreground hover:border-gold/20 hover:text-paper"
              }
            `}
          >
            <span className="mr-2 text-lg">{l.icon}</span>
            {l.layer}
            {activeLayer === i && (
              <motion.div
                layoutId="activeLayerIndicator"
                className="absolute -bottom-px left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Active layer content: text + 3D model + diagram */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLayer}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {/* Left: Layer details */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center"
              >
                <span className="text-gold font-serif-cn text-xl font-bold">
                  {layers[activeLayer].icon}
                </span>
              </motion.div>
              <div>
                <span className="text-gold/70 font-sans-cn text-xs tracking-[0.3em] uppercase block">
                  {layers[activeLayer].layer}
                </span>
                <h4 className="text-paper font-serif-cn text-lg font-bold">
                  {layers[activeLayer].title}
                </h4>
              </div>
            </div>

            <ul className="space-y-3 mb-4">
              {layers[activeLayer].details.map((d, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.1 + 0.2 }}
                  className="text-muted-foreground font-sans-cn text-sm leading-relaxed flex gap-2"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: j * 0.1 + 0.3, type: "spring" }}
                    className="text-gold/50 mt-1 flex-shrink-0"
                  >
                    ◆
                  </motion.span>
                  <span>{d}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="border-t border-border pt-3 origin-left"
            >
              <p className="text-gold/60 font-sans-cn text-xs tracking-wider">
                <span className="text-gold/40">作用 →</span> {layers[activeLayer].role}
              </p>
            </motion.div>
          </div>

          {/* Center: 3D Model */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-lg overflow-hidden border border-border bg-card md:col-span-1"
          >
            <BracketViewer
              modelPath={layers[activeLayer].model.modelPath}
              height="280px"
            />
            <div className="px-4 py-3 border-t border-border">
              <h4 className="text-paper font-serif-cn text-sm font-bold mb-1">
                {layers[activeLayer].model.name}
              </h4>
              <p className="text-muted-foreground font-sans-cn text-xs leading-relaxed">
                {layers[activeLayer].model.desc}
              </p>
            </div>
          </motion.div>

          {/* Right: Diagram */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="rounded-lg overflow-hidden border border-border bg-card group md:col-span-1"
          >
            <ImageLightbox
              src={layers[activeLayer].diagram.src}
              alt={layers[activeLayer].diagram.alt}
            >
              <div className="overflow-hidden">
                <img
                  src={layers[activeLayer].diagram.src}
                  alt={layers[activeLayer].diagram.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </ImageLightbox>
            <p className="text-muted-foreground font-sans-cn text-xs text-center py-3">
              {layers[activeLayer].diagram.caption}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Corner brackets row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-10"
      >
        <h4 className="text-paper font-serif-cn text-lg font-bold text-center mb-1">
          转角构造
        </h4>
        <p className="text-muted-foreground font-sans-cn text-xs text-center mb-6">
          角科斗拱 · 承接两向檐部荷载
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {cornerModels.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: i === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-lg overflow-hidden border border-border bg-card hover:border-gold/30 transition-colors duration-500"
            >
              <BracketViewer modelPath={m.modelPath} height="240px" />
              <div className="px-4 py-3 border-t border-border">
                <h4 className="text-paper font-serif-cn text-sm font-bold mb-1">{m.name}</h4>
                <p className="text-muted-foreground font-sans-cn text-xs leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Unique values with hover animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 grid md:grid-cols-3 gap-4"
      >
        {uniqueValues.map((v, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, borderColor: "hsl(35 30% 45% / 0.4)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-card border border-border rounded-lg p-6 text-center cursor-default group"
          >
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3"
            >
              <span className="text-gold font-serif-cn text-lg font-bold">{v.icon}</span>
            </motion.div>
            <span className="text-paper font-serif-cn text-base font-bold">{v.label}</span>
            <p className="text-muted-foreground font-sans-cn text-xs mt-2 leading-relaxed">
              {v.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional diagrams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <h4 className="text-paper font-serif-cn text-lg font-bold text-center mb-1">
          更多结构图解
        </h4>
        <p className="text-muted-foreground font-sans-cn text-xs text-center mb-6">
          悬空柱体系 · 柱网布局 · 三层尺寸 · 结构总览
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalDiagrams.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: "hsl(35 30% 45% / 0.3)" }}
              className="rounded-lg overflow-hidden border border-border bg-card group hover:shadow-[0_8px_30px_hsl(35_30%_45%/0.08)] transition-shadow duration-500"
            >
              <ImageLightbox src={img.src} alt={img.alt}>
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </ImageLightbox>
              <p className="text-muted-foreground font-sans-cn text-xs text-center py-3 border-t border-border/50">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Summary quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 text-center border border-gold/20 rounded-lg p-8 bg-card relative overflow-hidden"
      >
        {/* Decorative corner marks */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/30" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/30" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/30" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/30" />

        <p className="text-paper font-serif-cn text-sm md:text-base leading-loose tracking-wider">
          真武阁以格木榫卯 + 杠杆斗拱，创造了「四柱悬空、四百年不倒」的木构神话；
          <br className="hidden md:block" />
          其斗拱是岭南明代木构的巅峰，也是中国古建筑结构智慧的极致体现。
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DougongSection;
