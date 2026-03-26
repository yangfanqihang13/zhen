import { motion } from "framer-motion";
import DougongSection from "./DougongSection";
import ImageLightbox from "./ImageLightbox";
import appearanceImg from "@/assets/appearance.jpg";

const features = [
  {
    label: "四柱悬空",
    title: "二楼四根内柱悬空不落地",
    desc: "二楼四根内柱柱脚离地约2\u20133cm，却承托三楼全部重量。以斗拱为杠杆，檐柱为支点，拱头挑檐、拱尾托柱，实现「四两拨千斤」的力学奇迹。",
    icon: "柱",
  },
  {
    label: "杠杆斗拱",
    title: "拱头挑檐 拱尾托柱",
    desc: "以斗拱为杠杆，檐柱为支点，拱头挑着沉重外檐，拱尾上托四根悬柱，形成精准的天平式平衡，是全球罕见的斗拱杠杆平衡系统。",
    icon: "拱",
  },
  {
    label: "榫卯自稳",
    title: "3000+格木构件 遇震可微动自复位",
    desc: "全阁使用铁力木（格木）构件，不费一钉一铁。榫卯留活缝适应干湿变形，遇震可微动缓冲、灾后自复位，兼具刚性与韧性。",
    icon: "卯",
  },
  {
    label: "砂基减震",
    title: "以柔克刚 四百年安然无恙",
    desc: "经略台内部以夯实河砂为基底而非硬石，砂层可吸收地震波。榫卯节点不卡死、砂基、杠杆平衡结构共同作用，实现「能屈能伸」的抗震哲学。",
    icon: "基",
  },
];

const ArchitectureSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-ink-light">
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
            Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-cn font-bold text-paper tracking-wider">
            天南杰构 · 活态木构奇迹
          </h2>
          <p className="text-muted-foreground font-sans-cn text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            广西容县绣江北岸 · 明万历元年（1573年） · 三层三檐歇山顶 · 纯木结构通高13.2米 · 无钉无铆
          </p>
          <p className="text-muted-foreground/60 font-sans-cn text-xs mt-2 tracking-wider">
            江南四大名楼中唯一原构未重建者 · 1982年全国重点文物保护单位
          </p>
          <div className="ink-divider w-32 mx-auto mt-6" />
        </motion.div>

        {/* Three Wonders highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold/70 font-sans-cn text-xs tracking-[0.5em] uppercase">
            Three Wonders
          </span>
          <h3 className="text-paper font-serif-cn text-xl md:text-2xl font-bold mt-2">
            三大奇观
          </h3>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                <span className="text-gold font-serif-cn text-2xl font-bold">
                  {f.icon}
                </span>
              </div>
              <span className="text-gold/70 font-sans-cn text-xs tracking-[0.3em] uppercase">
                {f.label}
              </span>
              <h3 className="text-paper font-serif-cn text-xl font-bold mt-2 mb-3">
                {f.title}
              </h3>
              <p className="text-muted-foreground font-sans-cn text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Integrated dougong details + 3D models + diagrams */}
        <DougongSection />

        {/* Appearance section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 items-center"
        >
          <ImageLightbox src={appearanceImg} alt="真武阁形制与外观">
            <div className="rounded-lg overflow-hidden border border-border cursor-zoom-in">
              <img
                src={appearanceImg}
                alt="真武阁形制与外观"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </ImageLightbox>
          <div>
            <span className="text-gold/70 font-sans-cn text-xs tracking-[0.3em] uppercase">
              形制与外观
            </span>
            <h3 className="text-paper font-serif-cn text-2xl md:text-3xl font-bold mt-2 mb-4">
              三重檐歇山顶 · 轻盈飞动
            </h3>
            <div className="space-y-4 text-muted-foreground font-sans-cn text-sm leading-relaxed">
              <p>
                三层纯木构楼阁，三重檐歇山顶，通高13.2米，连唐代经略台夯土基座总高近20米。面宽13.8米、进深11.2米，底层无封闭外墙，形成通透开敞的空间感，是岭南气候下的实用设计。
              </p>
              <p>
                各层出檐长度不同（底层1.5m、二层2.1m、三层1.75m），檐角上翘如飞，曲线流畅。屋脊饰鳌鱼、仙鹤等吉祥图案，轮廓优美，被誉为"古建屋顶美的杰作"。
              </p>
              <p>
                坐落在唐元结所筑的夯土经略台上，台体坚实厚重，木阁轻盈通透，刚柔并济，暗合道家"虚实相生"理念。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-lg p-8 bg-card"
        >
          {[
            { value: "1573", label: "始建年份" },
            { value: "440+年", label: "屹立至今" },
            { value: "~3000", label: "格木构件" },
            { value: "13.2m", label: "通高" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-serif-cn font-bold gold-gradient-text">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-sans-cn text-xs mt-1 tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Quote block below stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8"
          />
          <p className="text-paper/80 font-serif-cn text-xl md:text-2xl lg:text-3xl tracking-[0.15em] leading-[2]">
            不用一钉一铁，以杠杆之理，成悬空之奇。
          </p>
          <p className="text-gold/50 font-sans-cn text-sm mt-4 tracking-[0.3em]">
            —— 梁思成
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mt-8"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
