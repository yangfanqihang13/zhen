import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ImageLightbox from "./ImageLightbox";
import cultureStructure from "@/assets/culture-structure.jpg";
import cultureArt from "@/assets/culture-art.jpg";
import cultureHistory from "@/assets/culture-history.jpg";

const cultureCards = [
  {
    title: "力学与工程价值",
    subtitle: "Engineering Marvel",
    desc: "纯木构，无钉无铁，用近3000件铁力木构件通过复杂榫卯咬合。二层四根核心内柱悬空约2厘米不落地，靠悬臂杠杆体系，以外檐重量通过外围立柱为支点向内部向上托举，形成\u201C天平式\u201D平衡。",
    image: cultureStructure,
    icon: "构",
  },
  {
    title: "艺术审美价值",
    subtitle: "Aesthetic Excellence",
    desc: "三重檐歇山顶，飞檐舒展流畅，轮廓优美，被誉为\u201C古建屋顶美的杰作\u201D。木构线条简洁而富有韵律，与夯土高台形成\u201C刚柔并济\u201D的视觉对比，是岭南古建筑的典范。",
    image: cultureArt,
    icon: "美",
  },
  {
    title: "历史与学术意义",
    subtitle: "Historical Significance",
    desc: "是从军事要塞→宗教圣地→文化地标的演变活例，见证了岭南边疆自唐至明的政治、宗教、民俗变迁。为中国乃至世界木结构建筑研究提供了不可替代的实物标本。",
    image: cultureHistory,
    icon: "史",
  },
];

const CultureCard = ({
  card,
  index,
}: {
  card: (typeof cultureCards)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        isReversed ? "md:direction-rtl" : ""
      }`}
    >
      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={isReversed ? "md:order-2" : ""}
      >
        <ImageLightbox src={card.image} alt={card.title}>
          <div className="rounded-lg overflow-hidden border border-border relative group">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </ImageLightbox>
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className={isReversed ? "md:order-1" : ""}
      >
        {/* Icon badge */}
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-5"
        >
          <span className="text-gold font-serif-cn text-2xl font-bold">{card.icon}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-gold/50 font-sans-cn text-xs tracking-[0.3em] uppercase mb-2"
        >
          {card.subtitle}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-paper font-serif-cn text-2xl md:text-3xl font-bold mb-4"
        >
          {card.title}
        </motion.h3>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="ink-divider w-16 mb-5 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground font-sans-cn text-sm md:text-base leading-[1.9]"
        >
          {card.desc}
        </motion.p>
      </motion.div>
    </div>
  );
};

const CultureSection = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 md:py-24 ink-gradient overflow-hidden">
      {/* Ambient glows */}
      <div className="section-glow top-1/4 -right-48 opacity-30" />
      <div className="section-glow bottom-1/4 -left-48 opacity-25" />

      <div className="container max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-gold/60 font-sans-cn text-sm tracking-[0.5em] uppercase mb-3">
            Cultural Value
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-cn font-bold text-paper tracking-wider">
            文化与多元价值
          </h2>
          <div className="ink-divider w-32 mx-auto mt-6" />
        </motion.div>

        {/* Culture cards with images */}
        <div className="space-y-16 md:space-y-28">
          {cultureCards.map((card, i) => (
            <CultureCard key={i} card={card} index={i} />
          ))}
        </div>

        {/* Taoist connection */}
        <div ref={quoteRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mt-20 md:mt-32 border border-gold/15 rounded-lg p-8 md:p-12 bg-card/80 text-center relative overflow-hidden"
          >
            {/* Decorative corner marks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={quoteInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-gold/25" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-gold/25" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-gold/25" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-gold/25" />
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={quoteInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
              className="w-16 h-16 rounded-full bg-gold/8 border border-gold/15 flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-gold font-serif-cn text-2xl font-bold">道</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={quoteInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-paper font-serif-cn text-xl md:text-2xl font-bold mb-5"
            >
              道教与地方风水文化
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={quoteInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-3xl mx-auto space-y-3 text-muted-foreground font-sans-cn text-sm md:text-base leading-[1.9]"
            >
              <p>
                真武（玄武）为道教北方水神，宋避"玄"字讳改真武。建阁镇火，体现"五行相胜（水克火）"与天人感应的传统观念。
              </p>
              <p>
                是岭南道教传播的物质见证，与本地都峤山道教文化圈紧密关联。建筑坐北朝南，三重飞檐的形制也暗合道教"上应天象"的理念。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={quoteInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8"
            >
              <div className="ink-divider w-20 mx-auto mb-6" />
              <p className="text-gold/80 font-serif-cn text-lg italic tracking-wider">
                "科学、艺术与精神信仰的完美结合"
              </p>
              <p className="text-muted-foreground/50 font-sans-cn text-xs mt-3 tracking-wider">
                —— 中外学者评价
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
