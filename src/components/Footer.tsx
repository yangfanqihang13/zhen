import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative bg-ink border-t border-gold/10 py-20 md:py-28 overflow-hidden">
    {/* Ambient glows */}
    <div className="section-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, hsl(var(--gold)) 1px, transparent 1px), radial-gradient(circle at 80% 30%, hsl(var(--gold)) 1px, transparent 1px)",
        backgroundSize: "120px 120px, 90px 90px",
      }}
    />

    <div className="container max-w-5xl mx-auto px-6 relative z-10">
      {/* Decorative top ornament */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <span className="text-gold/30 font-serif-cn text-lg">◇</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        {/* Vertical calligraphy-style title */}
        <p className="font-serif-cn text-4xl md:text-5xl font-bold gold-gradient-text tracking-[0.3em] mb-4">
          真武阁
        </p>
        <p className="text-gold/40 font-serif-cn text-sm tracking-[0.4em]">
          天南杰构
        </p>
      </motion.div>

      {/* Info grid */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-12"
      >
        <div>
          <p className="text-gold/50 font-sans-cn text-[10px] tracking-[0.5em] uppercase mb-2">
            Location
          </p>
          <p className="text-muted-foreground/70 font-sans-cn text-xs tracking-wider leading-relaxed">
            广西壮族自治区玉林市容县
            <br />
            经略台真武阁景区
          </p>
        </div>
        <div>
          <p className="text-gold/50 font-sans-cn text-[10px] tracking-[0.5em] uppercase mb-2">
            Heritage
          </p>
          <p className="text-muted-foreground/70 font-sans-cn text-xs tracking-wider leading-relaxed">
            全国重点文物保护单位
            <br />
            明万历元年（1573年）始建
          </p>
        </div>
        <div>
          <p className="text-gold/50 font-sans-cn text-[10px] tracking-[0.5em] uppercase mb-2">
            Status
          </p>
          <p className="text-muted-foreground/70 font-sans-cn text-xs tracking-wider leading-relaxed">
            中国四大名楼之一
            <br />
            唯一未经重建的原构古楼
          </p>
        </div>
      </motion.div>

      {/* Divider with ornament */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-gold/15" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/20" />
        <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-gold/15" />
      </div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-muted-foreground/30 font-serif-cn text-sm tracking-[0.2em] leading-loose mb-10"
      >
        「四百余年，风霜不改其骨」
      </motion.p>

      {/* Copyright */}
      <p className="text-center text-muted-foreground/25 font-sans-cn text-[11px] tracking-wider">
        © {new Date().getFullYear()} 真武阁历史建筑数字展示 · Digital Heritage Archive
      </p>
    </div>
  </footer>
);

export default Footer;
