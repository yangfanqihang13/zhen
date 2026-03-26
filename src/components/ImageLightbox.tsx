import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

const ImageLightbox = ({ src, alt, children }: ImageLightboxProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-zoom-in relative group/lightbox"
      >
        {children}
        {/* Hover overlay with zoom icon */}
        <div className="absolute inset-0 bg-ink/0 group-hover/lightbox:bg-ink/30 transition-all duration-500 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover/lightbox:opacity-100 transition-opacity duration-500 w-10 h-10 rounded-full bg-ink/60 backdrop-blur-sm border border-gold/30 flex items-center justify-center">
            <ZoomIn className="w-4 h-4 text-gold" />
          </div>
        </div>
      </div>
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8"
              onClick={handleClose}
            >
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-[10000] w-11 h-11 rounded-full bg-card/90 border border-gold/20 flex items-center justify-center text-paper hover:bg-card hover:border-gold/40 transition-all duration-300 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
              <motion.img
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                src={src}
                alt={alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              {/* Caption */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-paper/70 font-sans-cn text-xs tracking-wider bg-ink/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50"
              >
                {alt}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ImageLightbox;
