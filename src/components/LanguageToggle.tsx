import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleLang}
      className="px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-border text-xs font-sans-cn tracking-wider text-foreground/70 hover:text-foreground hover:border-gold/30 transition-colors duration-300"
      aria-label="Switch language"
    >
      {lang === "zh" ? "EN" : "中文"}
    </motion.button>
  );
};

export default LanguageToggle;
