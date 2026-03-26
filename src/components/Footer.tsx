import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-ink border-t border-gold/10 py-20 md:py-28 overflow-hidden">
      <div className="section-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--gold)) 1px, transparent 1px), radial-gradient(circle at 80% 30%, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "120px 120px, 90px 90px",
        }}
      />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <span className="text-gold/30 font-serif-cn text-lg">◇</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <p className="font-serif-cn text-4xl md:text-5xl font-bold gold-gradient-text tracking-[0.3em] mb-4">{t.footer.title}</p>
          <p className="text-gold/40 font-serif-cn text-sm tracking-[0.4em]">{t.footer.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-12">
          <div>
            <p className="text-gold/50 font-sans-cn text-[10px] tracking-[0.5em] uppercase mb-2">{t.footer.locationLabel}</p>
            <p className="text-muted-foreground/70 font-sans-cn text-xs tracking-wider leading-relaxed">{t.footer.locationLine1}<br />{t.footer.locationLine2}</p>
          </div>
          <div>
            <p className="text-gold/50 font-sans-cn text-[10px] tracking-[0.5em] uppercase mb-2">{t.footer.heritageLabel}</p>
            <p className="text-muted-foreground/70 font-sans-cn text-xs tracking-wider leading-relaxed">{t.footer.heritageLine1}<br />{t.footer.heritageLine2}</p>
          </div>
          <div>
            <p className="text-gold/50 font-sans-cn text-[10px] tracking-[0.5em] uppercase mb-2">{t.footer.statusLabel}</p>
            <p className="text-muted-foreground/70 font-sans-cn text-xs tracking-wider leading-relaxed">{t.footer.statusLine1}<br />{t.footer.statusLine2}</p>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-gold/15" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/20" />
          <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-gold/15" />
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="text-center text-muted-foreground/30 font-serif-cn text-sm tracking-[0.2em] leading-loose mb-10">
          {t.footer.quote}
        </motion.p>

        <p className="text-center text-muted-foreground/25 font-sans-cn text-[11px] tracking-wider">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
