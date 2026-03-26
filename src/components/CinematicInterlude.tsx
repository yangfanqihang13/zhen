import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CinematicInterludeProps {
  image: string;
  quote: string;
  author?: string;
  subtitle?: string;
  verticalText?: string;
}

const CinematicInterlude = ({
  image,
  quote,
  author,
  subtitle,
  verticalText,
}: CinematicInterludeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={image}
          alt=""
          className="w-full h-[120%] object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
      </motion.div>

      {/* Dark overlay with vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, hsl(var(--ink) / 0.6) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-8"
      >
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-8"
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gold/40 font-sans-cn text-xs tracking-[0.5em] uppercase mb-6"
          >
            {subtitle}
          </motion.p>
        )}

        {typeof quote === 'string' && quote.includes('；') ? (
          <div className="text-center max-w-3xl">
            {quote.split('；').filter(Boolean).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.3, duration: 1 }}
                className="text-paper/90 font-serif-cn text-xl md:text-3xl lg:text-4xl font-bold leading-[2] tracking-[0.1em]"
              >
                {line.trim()}{i === 0 ? '；' : '。'}
              </motion.p>
            ))}
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-paper/90 font-serif-cn text-xl md:text-3xl lg:text-4xl font-bold text-center leading-[2] tracking-[0.1em] max-w-3xl"
          >
            {quote}
          </motion.p>
        )}

        {author && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-gold/60 font-sans-cn text-sm mt-6 tracking-[0.2em]"
          >
            —— {author}
          </motion.p>
        )}

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-8"
        />

        {/* Vertical text decoration */}
        {verticalText && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gold/20 font-serif-cn text-xs tracking-[0.5em] hidden lg:block"
            style={{ writingMode: "vertical-rl" }}
          >
            {verticalText}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default CinematicInterlude;
