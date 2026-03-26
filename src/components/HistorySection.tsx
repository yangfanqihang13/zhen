import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImageLightbox from "./ImageLightbox";
import historyImg from "@/assets/history-timeline.jpg";

const timelineData = [
  {
    year: "唐代",
    title: "经略台缘起",
    desc: "经略台缘起于唐代，最初是军事高台，体为夯土构筑，坚实厚重，历经千年不毁，成为后世真武阁的基座。",
  },
  {
    year: "明初",
    title: "设玄武宫",
    desc: "明初在此设玄武宫（武当宫），供奉真武大帝。",
  },
  {
    year: "1573年",
    title: "真武阁建成",
    desc: "明万历元年，知县伍可受牵头，将旧宫扩建成三层纯木构楼阁，定名真武阁。整栋建筑不用一钉一铁，以杠杆原理串联近三千构件。",
    highlight: true,
  },
  {
    year: "清代",
    title: "多次修缮",
    desc: "清代曾短暂改为佛寺，康熙至同治年间多次修缮，保持了原有的建筑结构与风貌。",
  },
  {
    year: "1962年",
    title: "梁思成考察",
    desc: "著名建筑学家梁思成实地考察并发表论文，让其独特的杠杆结构在建筑学界广为人知，评价其杠杆原理在木构乃至现代金属建筑中都极为罕见。",
  },
  {
    year: "1982年",
    title: "国家重点文物",
    desc: "被国务院公布为全国重点文物保护单位，与岳阳楼、黄鹤楼、滕王阁并称为中国古代四大名楼，是其中唯一一座从未重建、完整保存至今的古建筑。",
  },
];

/* Animated timeline connector line */
const TimelineLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-px">
      {/* Background track */}
      <div className="absolute inset-0 w-px bg-gold/10" />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-0 w-px bg-gradient-to-b from-gold/50 via-gold/30 to-gold/10"
        initial={{ height: "0%" }}
        animate={isInView ? { height: "100%" } : { height: "0%" }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
    </div>
  );
};

/* Individual timeline node with animated dot */
const TimelineNode = ({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const isHighlight = "highlight" in item && item.highlight;

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-14 md:mb-20 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Animated dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
        className="absolute left-4 md:left-1/2 -translate-x-1 md:-translate-x-[5px] mt-2 z-10"
      >
        <div
          className={`w-3 h-3 rounded-full border-2 border-background ${
            isHighlight ? "bg-gold shadow-[0_0_12px_hsl(var(--gold)/0.5)]" : "bg-gold"
          }`}
        />
        {/* Pulse ring for highlight */}
        {isHighlight && (
          <motion.div
            className="absolute inset-0 rounded-full border border-gold/40"
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.div>

      {/* Horizontal connector line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.35 }}
        className={`hidden md:block absolute top-[14px] h-px bg-gradient-to-r from-gold/30 to-transparent w-12 ${
          isEven
            ? "right-1/2 mr-1.5 origin-right"
            : "left-1/2 ml-1.5 origin-left"
        }`}
      />

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40, y: 10 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className={`ml-12 md:ml-0 md:w-1/2 ${
          isEven ? "md:pr-20 md:text-right" : "md:pl-20"
        }`}
      >
        <div
          className={`${
            isHighlight
              ? "bg-card/80 border border-gold/20 rounded-lg p-5 shadow-[0_4px_20px_hsl(var(--gold)/0.06)]"
              : ""
          }`}
        >
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.45 }}
            className={`font-serif-cn text-lg font-bold ${
              isHighlight ? "gold-gradient-text text-xl" : "text-gold"
            }`}
          >
            {item.year}
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 5 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-paper font-serif-cn text-xl md:text-2xl font-bold mt-1 mb-2"
          >
            {item.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-muted-foreground font-sans-cn text-sm md:text-base leading-relaxed"
          >
            {item.desc}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

const HistorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 ink-gradient overflow-hidden">
      {/* Parallax ambient glows */}
      <motion.div className="section-glow -top-48 -right-48 opacity-40" style={{ x: glowX }} />
      <motion.div className="section-glow -bottom-48 -left-48 opacity-30" style={{ x: glowX }} />

      <div className="container max-w-5xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-gold/60 font-sans-cn text-sm tracking-[0.5em] uppercase mb-3">
            History
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-cn font-bold text-paper tracking-wider">
            历史沿革
          </h2>
          <div className="ink-divider w-32 mx-auto mt-6" />
        </motion.div>

        {/* History illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 rounded-lg overflow-hidden border border-border"
        >
          <ImageLightbox src={historyImg} alt="真武阁历史背景时间线">
            <img
              src={historyImg}
              alt="真武阁历史背景时间线"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </ImageLightbox>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <TimelineLine />
          {timelineData.map((item, i) => (
            <TimelineNode key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
