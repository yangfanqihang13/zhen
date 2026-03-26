import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImageLightbox from "./ImageLightbox";
import historyImg from "@/assets/history-timeline.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const TimelineLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-px">
      <div className="absolute inset-0 w-px bg-gold/10" />
      <motion.div
        className="absolute top-0 left-0 w-px bg-gradient-to-b from-gold/50 via-gold/30 to-gold/10"
        initial={{ height: "0%" }}
        animate={isInView ? { height: "100%" } : { height: "0%" }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
    </div>
  );
};

const TimelineNode = ({
  item,
  index,
}: {
  item: { year: string; title: string; desc: string; highlight?: boolean };
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const isHighlight = item.highlight;

  return (
    <div ref={ref} className={`relative flex items-start mb-14 md:mb-20 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
        className="absolute left-4 md:left-1/2 -translate-x-1 md:-translate-x-[5px] mt-2 z-10"
      >
        <div className={`w-3 h-3 rounded-full border-2 border-background ${isHighlight ? "bg-gold shadow-[0_0_12px_hsl(var(--gold)/0.5)]" : "bg-gold"}`} />
        {isHighlight && (
          <motion.div className="absolute inset-0 rounded-full border border-gold/40" animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />
        )}
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.35 }}
        className={`hidden md:block absolute top-[14px] h-px bg-gradient-to-r from-gold/30 to-transparent w-12 ${isEven ? "right-1/2 mr-1.5 origin-right" : "left-1/2 ml-1.5 origin-left"}`}
      />

      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40, y: 10 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-20 md:text-right" : "md:pl-20"}`}
      >
        <div className={isHighlight ? "bg-card/80 border border-gold/20 rounded-lg p-5 shadow-[0_4px_20px_hsl(var(--gold)/0.06)]" : ""}>
          <motion.span initial={{ opacity: 0, y: -5 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.45 }} className={`font-serif-cn text-lg font-bold ${isHighlight ? "gold-gradient-text text-xl" : "text-gold"}`}>
            {item.year}
          </motion.span>
          <motion.h3 initial={{ opacity: 0, y: 5 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.5 }} className="text-paper font-serif-cn text-xl md:text-2xl font-bold mt-1 mb-2">
            {item.title}
          </motion.h3>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.55 }} className="text-muted-foreground font-sans-cn text-sm md:text-base leading-relaxed">
            {item.desc}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

const HistorySection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const glowX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 ink-gradient overflow-hidden">
      <motion.div className="section-glow -top-48 -right-48 opacity-40" style={{ x: glowX }} />
      <motion.div className="section-glow -bottom-48 -left-48 opacity-30" style={{ x: glowX }} />

      <div className="container max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-16 md:mb-24">
          <p className="text-gold/60 font-sans-cn text-sm tracking-[0.5em] uppercase mb-3">{t.history.label}</p>
          <h2 className="text-3xl md:text-5xl font-serif-cn font-bold text-paper tracking-wider">{t.history.title}</h2>
          <div className="ink-divider w-32 mx-auto mt-6" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 md:mb-20 rounded-lg overflow-hidden border border-border">
          <ImageLightbox src={historyImg} alt={t.history.imgAlt}>
            <img src={historyImg} alt={t.history.imgAlt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </ImageLightbox>
        </motion.div>

        <div className="relative">
          <TimelineLine />
          {t.history.timeline.map((item, i) => (
            <TimelineNode key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
