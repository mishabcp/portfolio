import { motion, useScroll, useTransform } from 'framer-motion';

export default function Atmosphere() {
  const { scrollYProgress } = useScroll();

  // Subtle parallax for the blurred blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 0.35, 0.75]);

  return (
    <div className="atmosphere" aria-hidden="true">
      <motion.div
        className="atmosphere-blob atmosphere-blob--1"
        style={{ y: y1, scale: scale1, opacity }}
      />
      <motion.div
        className="atmosphere-blob atmosphere-blob--2"
        style={{ y: y2, opacity }}
      />
      {/* Dynamic noise/grain overlay for extra premium feel */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.015,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
