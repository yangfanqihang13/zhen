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
import { useLanguage } from "@/i18n/LanguageContext";

const modelPaths = [
  "/models/intermediate-bracket.glb",
  "/models/column-top-ang.glb",
  "/models/small-intermediate.glb",
];

const diagramSources = [structureDougong, structureLever, structureTenon];
const diagramAlts = ["三层斗拱形制对比", "杠杆式斗拱榫卯结构解析", "馒头榫与燕尾榫细节"];

const cornerModelPaths = ["/models/corner-bracket.glb", "/models/corner-bracket-2.glb"];

const additionalDiagramSources = [structureDimensions, structureColumns, structurePlan, structureDetail];
const additionalDiagramAlts = ["三层尺寸标注", "悬空柱与挑梁结构", "中层平面柱网布局", "纯木无钉结构特点"];

const DougongSection = () => {
  const [activeLayer, setActiveLayer] = useState(1);
  const { t } = useLanguage();
  const layers = t.dougong.layers;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 md:mt-24">
      <div className="text-center mb-12">
        <span className="text-gold/60 font-sans-cn text-xs tracking-[0.5em] uppercase">{t.dougong.label}</span>
        <h3 className="text-paper font-serif-cn text-2xl md:text-3xl font-bold mt-2 mb-3">{t.dougong.title}</h3>
        <p className="text-muted-foreground font-sans-cn text-sm max-w-2xl mx-auto leading-relaxed">{t.dougong.desc}</p>
        <div className="ink-divider w-24 mx-auto mt-6" />
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {layers.map((l, i) => (
          <motion.button key={i} onClick={() => setActiveLayer(i)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className={`relative px-6 py-3 rounded-lg font-serif-cn text-sm font-bold transition-all duration-500 ${activeLayer === i ? "bg-gold/15 text-gold border border-gold/40 shadow-[0_0_20px_hsl(35_30%_45%/0.15)]" : "bg-card border border-border text-muted-foreground hover:border-gold/20 hover:text-paper"}`}>
            <span className="mr-2 text-lg">{l.icon}</span>{l.layer}
            {activeLayer === i && <motion.div layoutId="activeLayerIndicator" className="absolute -bottom-px left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeLayer} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-3 gap-6 items-start">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <motion.div initial={{ rotate: -10, scale: 0.8 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <span className="text-gold font-serif-cn text-xl font-bold">{layers[activeLayer].icon}</span>
              </motion.div>
              <div>
                <span className="text-gold/70 font-sans-cn text-xs tracking-[0.3em] uppercase block">{layers[activeLayer].layer}</span>
                <h4 className="text-paper font-serif-cn text-lg font-bold">{layers[activeLayer].title}</h4>
              </div>
            </div>
            <ul className="space-y-3 mb-4">
              {layers[activeLayer].details.map((d, j) => (
                <motion.li key={j} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: j * 0.1 + 0.2 }} className="text-muted-foreground font-sans-cn text-sm leading-relaxed flex gap-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: j * 0.1 + 0.3, type: "spring" }} className="text-gold/50 mt-1 flex-shrink-0">◆</motion.span>
                  <span>{d}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="border-t border-border pt-3 origin-left">
              <p className="text-gold/60 font-sans-cn text-xs tracking-wider">
                <span className="text-gold/40">{t.dougong.rolePrefix}</span> {layers[activeLayer].role}
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }} className="rounded-lg overflow-hidden border border-border bg-card md:col-span-1">
            <BracketViewer modelPath={modelPaths[activeLayer]} height="280px" />
            <div className="px-4 py-3 border-t border-border">
              <h4 className="text-paper font-serif-cn text-sm font-bold mb-1">{layers[activeLayer].modelName}</h4>
              <p className="text-muted-foreground font-sans-cn text-xs leading-relaxed">{layers[activeLayer].modelDesc}</p>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }} className="rounded-lg overflow-hidden border border-border bg-card group md:col-span-1">
            <ImageLightbox src={diagramSources[activeLayer]} alt={diagramAlts[activeLayer]}>
              <div className="overflow-hidden">
                <img src={diagramSources[activeLayer]} alt={diagramAlts[activeLayer]} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </ImageLightbox>
            <p className="text-muted-foreground font-sans-cn text-xs text-center py-3">{layers[activeLayer].diagramCaption}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-10">
        <h4 className="text-paper font-serif-cn text-lg font-bold text-center mb-1">{t.dougong.cornerTitle}</h4>
        <p className="text-muted-foreground font-sans-cn text-xs text-center mb-6">{t.dougong.cornerDesc}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {t.dougong.cornerModels.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, rotateY: i === 0 ? -8 : 8 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="rounded-lg overflow-hidden border border-border bg-card hover:border-gold/30 transition-colors duration-500">
              <BracketViewer modelPath={cornerModelPaths[i]} height="240px" />
              <div className="px-4 py-3 border-t border-border">
                <h4 className="text-paper font-serif-cn text-sm font-bold mb-1">{m.name}</h4>
                <p className="text-muted-foreground font-sans-cn text-xs leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12 grid md:grid-cols-3 gap-4">
        {t.dougong.uniqueValues.map((v, i) => (
          <motion.div key={i} whileHover={{ y: -4, borderColor: "hsl(35 30% 45% / 0.4)" }} transition={{ type: "spring", stiffness: 300 }} className="bg-card border border-border rounded-lg p-6 text-center cursor-default group">
            <motion.div whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }} transition={{ duration: 0.5 }} className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-gold font-serif-cn text-lg font-bold">{v.icon}</span>
            </motion.div>
            <span className="text-paper font-serif-cn text-base font-bold">{v.label}</span>
            <p className="text-muted-foreground font-sans-cn text-xs mt-2 leading-relaxed">{v.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-12">
        <h4 className="text-paper font-serif-cn text-lg font-bold text-center mb-1">{t.dougong.moreTitle}</h4>
        <p className="text-muted-foreground font-sans-cn text-xs text-center mb-6">{t.dougong.moreDesc}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.dougong.additionalDiagrams.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4, borderColor: "hsl(35 30% 45% / 0.3)" }} className="rounded-lg overflow-hidden border border-border bg-card group hover:shadow-[0_8px_30px_hsl(35_30%_45%/0.08)] transition-shadow duration-500">
              <ImageLightbox src={additionalDiagramSources[i]} alt={additionalDiagramAlts[i]}>
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={additionalDiagramSources[i]} alt={additionalDiagramAlts[i]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              </ImageLightbox>
              <p className="text-muted-foreground font-sans-cn text-xs text-center py-3 border-t border-border/50">{img.caption}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12 text-center border border-gold/20 rounded-lg p-8 bg-card relative overflow-hidden">
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/30" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/30" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/30" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/30" />
        <p className="text-paper font-serif-cn text-sm md:text-base leading-loose tracking-wider">
          {t.dougong.summaryQuote.split("\n").map((line, i) => (
            <span key={i}>{line}{i === 0 && <br className="hidden md:block" />}</span>
          ))}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DougongSection;
