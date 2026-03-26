import { motion } from "framer-motion";
import DougongSection from "./DougongSection";
import ImageLightbox from "./ImageLightbox";
import appearanceImg from "@/assets/appearance.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const ArchitectureSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 bg-ink-light">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-16 md:mb-24">
          <p className="text-gold/60 font-sans-cn text-sm tracking-[0.5em] uppercase mb-3">{t.architecture.label}</p>
          <h2 className="text-3xl md:text-5xl font-serif-cn font-bold text-paper tracking-wider">{t.architecture.title}</h2>
          <p className="text-muted-foreground font-sans-cn text-sm mt-4 max-w-2xl mx-auto leading-relaxed">{t.architecture.desc}</p>
          <p className="text-muted-foreground/60 font-sans-cn text-xs mt-2 tracking-wider">{t.architecture.subdesc}</p>
          <div className="ink-divider w-32 mx-auto mt-6" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="text-gold/70 font-sans-cn text-xs tracking-[0.5em] uppercase">{t.architecture.threeWondersLabel}</span>
          <h3 className="text-paper font-serif-cn text-xl md:text-2xl font-bold mt-2">{t.architecture.threeWondersTitle}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {t.architecture.features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.15 }} className="group relative bg-card border border-border rounded-lg p-8 hover:border-gold/30 transition-colors duration-500">
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                <span className="text-gold font-serif-cn text-2xl font-bold">{f.icon}</span>
              </div>
              <span className="text-gold/70 font-sans-cn text-xs tracking-[0.3em] uppercase">{f.label}</span>
              <h3 className="text-paper font-serif-cn text-xl font-bold mt-2 mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-sans-cn text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <DougongSection />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 items-center">
          <ImageLightbox src={appearanceImg} alt={t.architecture.appearanceAlt}>
            <div className="rounded-lg overflow-hidden border border-border cursor-zoom-in">
              <img src={appearanceImg} alt={t.architecture.appearanceAlt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </ImageLightbox>
          <div>
            <span className="text-gold/70 font-sans-cn text-xs tracking-[0.3em] uppercase">{t.architecture.appearanceLabel}</span>
            <h3 className="text-paper font-serif-cn text-2xl md:text-3xl font-bold mt-2 mb-4">{t.architecture.appearanceTitle}</h3>
            <div className="space-y-4 text-muted-foreground font-sans-cn text-sm leading-relaxed">
              <p>{t.architecture.appearanceP1}</p>
              <p>{t.architecture.appearanceP2}</p>
              <p>{t.architecture.appearanceP3}</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-lg p-8 bg-card">
          {t.architecture.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-serif-cn font-bold gold-gradient-text">{stat.value}</p>
              <p className="text-muted-foreground font-sans-cn text-xs mt-1 tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="mt-12 md:mt-16 text-center">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />
          <p className="text-paper/80 font-serif-cn text-xl md:text-2xl lg:text-3xl tracking-[0.15em] leading-[2]">{t.architecture.quote}</p>
          <p className="text-gold/50 font-sans-cn text-sm mt-4 tracking-[0.3em]">{t.architecture.quoteAuthor}</p>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
