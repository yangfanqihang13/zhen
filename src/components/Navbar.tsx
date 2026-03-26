import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.history, href: "#history" },
    { label: t.nav.architecture, href: "#architecture" },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-xl border-b border-gold/10 shadow-[0_4px_30px_hsl(var(--ink)/0.5)]"
            : ""
        }`}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-gold/80 via-gold/60 to-gold/30"
          style={{ scaleX }}
        />

        <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#hero" className="font-serif-cn text-lg font-bold gold-gradient-text tracking-widest hover:opacity-80 transition-opacity duration-300">
            {t.nav.brand}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-paper font-sans-cn text-sm tracking-wider transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <LanguageToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-paper p-2"
              aria-label="Menu"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-px bg-paper transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
                <span className={`block h-px bg-paper transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px bg-paper transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-ink/95 backdrop-blur-md border-b border-border overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-muted-foreground hover:text-paper font-sans-cn text-sm tracking-wider transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ScrollToTopButton />
    </>
  );
};

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-card/80 backdrop-blur-md border border-gold/20 flex items-center justify-center text-gold hover:border-gold/40 hover:bg-card transition-colors duration-300 shadow-lg"
          aria-label={t.nav.backToTop}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold">
            <path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
