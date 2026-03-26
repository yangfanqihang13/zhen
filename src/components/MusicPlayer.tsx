import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showVolume, setShowVolume] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <audio ref={audioRef} src="/music/background.mp3" loop preload="auto" />

      <AnimatePresence>
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 mb-1 flex flex-col items-center gap-2"
          >
            <Volume2 className="w-3.5 h-3.5 text-muted-foreground" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-1.5 h-24 accent-primary appearance-none cursor-pointer"
              style={{ writingMode: "vertical-lr", direction: "rtl" }}
            />
            <VolumeX className="w-3.5 h-3.5 text-muted-foreground" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowVolume(!showVolume)}
          className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
          aria-label={t.player.volumeLabel}
        >
          {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
          aria-label={isPlaying ? t.player.pause : t.player.play}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </motion.button>
      </div>
    </div>
  );
};

export default MusicPlayer;
