import { motion } from "framer-motion";

interface SectionDividerProps {
  symbol?: string;
  className?: string;
}

const SectionDivider = ({ symbol = "◇", className = "" }: SectionDividerProps) => (
  <div className={`relative py-12 md:py-16 flex items-center justify-center ${className}`}>
    {/* Left decorative line */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-24 md:w-40 h-px bg-gradient-to-r from-transparent to-gold/30 origin-left"
    />

    {/* Center symbol */}
    <motion.div
      initial={{ scale: 0, rotate: 45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
      className="mx-4 md:mx-6"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold/20 flex items-center justify-center bg-ink/80 backdrop-blur-sm">
        <span className="text-gold/50 font-serif-cn text-xs md:text-sm">{symbol}</span>
      </div>
    </motion.div>

    {/* Right decorative line */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-24 md:w-40 h-px bg-gradient-to-l from-transparent to-gold/30 origin-right"
    />
  </div>
);

export default SectionDivider;
