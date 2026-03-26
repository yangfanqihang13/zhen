import { motion } from "framer-motion";

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
  },
];

const uniqueValues = [
  {
    label: "岭南风格",
    text: "多用插拱（非柱头坐斗），出跳长、拱身简洁，区别于清式繁复",
  },
  {
    label: "结构至上",
    text: "斗拱以受力优先，装饰为辅，是明代南方木构的活标本",
  },
  {
    label: "杠杆原理",
    text: "全球罕见的斗拱杠杆平衡系统，实现「悬空承重」的建筑奇迹",
  },
];

const DougongDetail = () => {
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

      {/* Layer-by-layer breakdown */}
      <div className="space-y-6">
        {layers.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-gold/30 transition-colors duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-gold font-serif-cn text-xl font-bold">{l.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-gold/70 font-sans-cn text-xs tracking-[0.3em] uppercase">
                    {l.layer}
                  </span>
                  <h4 className="text-paper font-serif-cn text-lg font-bold">{l.title}</h4>
                </div>
                <ul className="space-y-2 mb-3">
                  {l.details.map((d, j) => (
                    <li key={j} className="text-muted-foreground font-sans-cn text-sm leading-relaxed flex gap-2">
                      <span className="text-gold/40 mt-1.5 flex-shrink-0">·</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gold/60 font-sans-cn text-xs tracking-wider border-t border-border pt-3 mt-3">
                  作用：{l.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Unique values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 grid md:grid-cols-3 gap-4"
      >
        {uniqueValues.map((v, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-lg p-6 text-center hover:border-gold/30 transition-colors duration-500"
          >
            <span className="text-gold font-serif-cn text-lg font-bold">{v.label}</span>
            <p className="text-muted-foreground font-sans-cn text-xs mt-2 leading-relaxed">
              {v.text}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Summary quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 text-center border border-gold/20 rounded-lg p-8 bg-card"
      >
        <p className="text-paper font-serif-cn text-sm md:text-base leading-loose tracking-wider">
          真武阁以格木榫卯 + 杠杆斗拱，创造了「四柱悬空、四百年不倒」的木构神话；
          <br className="hidden md:block" />
          其斗拱是岭南明代木构的巅峰，也是中国古建筑结构智慧的极致体现。
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DougongDetail;
