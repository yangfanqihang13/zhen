import { motion } from "framer-motion";
import ModelViewer from "./ModelViewer";
import inkPaintingBg from "@/assets/ink-painting-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-ink">
      {/* Left: Ink painting side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex items-center justify-center"
      >
        {/* Painting background */}
        <div className="absolute inset-0">
          <img
            src={inkPaintingBg}
            alt="水墨画背景"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-ink" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/50" />
        </div>

        {/* Title overlay */}
        <div className="relative z-10 text-center px-8 md:px-12 py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <p className="text-gold/50 font-sans-cn text-xs tracking-[0.6em] uppercase mb-4">
              Zhenwu Pavilion
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif-cn font-bold gold-gradient-text tracking-widest leading-tight">
              真武阁
            </h1>
            <div className="ink-divider w-24 mx-auto mt-6 mb-6" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-muted-foreground font-sans-cn text-sm md:text-base tracking-[0.2em] leading-loose"
            >
              广西容县 · 明万历元年
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-muted-foreground/60 font-sans-cn text-xs tracking-[0.15em] mt-2"
            >
              公元1573年
            </motion.p>
          </motion.div>

          {/* Vertical decorative line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent mx-auto mt-10 origin-top"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="hidden md:block text-muted-foreground/40 font-serif-cn text-xs tracking-[0.5em] mt-6 writing-vertical"
            style={{ writingMode: "vertical-rl" }}
          >
            古今对照
          </motion.p>
        </div>
      </motion.div>

      {/* Center divider */}
      <div className="hidden md:flex items-center justify-center relative z-20">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-px h-2/3 bg-gradient-to-b from-transparent via-gold/40 to-transparent origin-center"
        />
      </div>

      {/* Right: 3D Model side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center"
      >
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(35 30% 45% / 0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative z-10 text-gold/50 font-sans-cn text-xs tracking-[0.5em] uppercase mb-2 mt-20 md:mt-0"
        >
          3D Digital Model
        </motion.p>

        {/* 3D Viewer */}
        <div className="relative z-10 w-full max-w-xl h-[45vh] md:h-[55vh]">
          <ModelViewer />
        </div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="relative z-10 mt-2 text-muted-foreground/50 text-xs font-sans-cn tracking-wider"
        >
          拖拽旋转 · 滚轮缩放
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-gold/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
