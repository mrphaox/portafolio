import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";

const Preloader = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".preloader-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power2.out" }
    );

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 150);

    setTimeout(() => {
      setLoading(false);
      onAnimationComplete();
    }, 3000); // Duración de la animación de carga
  }, [onAnimationComplete]);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-900 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-white preloader-text">Cargando...</h1>
      <motion.div
        className="w-20 h-20 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mt-6"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      
      {/* Barra de progreso */}
      <div className="w-64 bg-gray-700 rounded-full mt-6">
        <motion.div
          className="h-2 bg-blue-400 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      
      <p className="text-gray-400 mt-2">{progress}%</p>
    </motion.div>
  );
};

export default Preloader;
