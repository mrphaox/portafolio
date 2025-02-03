import { motion } from "framer-motion";
import SocialLink from "./SocialLink";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="wrapper p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg text-center"
    >
      <h2 className="text-3xl font-bold text-white mb-4">📩 ¡Déjame crear tus productos!</h2>
      <p className="text-lg text-gray-300 mb-6">
        Estoy abierto a discutir su proyecto, mejorar su presencia en línea o ayudar con el diseño de su sitio web.
      </p>

      {/* Botón de Contacto con Animación */}
      <motion.a
        href="mailto:oneira1323@gmail.com"
        aria-label="Enviar correo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-600 hover:shadow-lg transition duration-300">
          Contáctame
        </button>
      </motion.a>

      {/* Redes Sociales con Animaciones */}
      <motion.div
        className="mt-8 flex items-center flex-wrap gap-8 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <SocialLink title="Github" link="https://github.com/mrphaox" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <SocialLink title="Youtube" link="https://www.youtube.com/channel/UCw7rSN4Igb-FOyuBq9QGang" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <SocialLink title="Linkedin" link="https://www.linkedin.com/in/oscar-alberto-neira-vaca-75b387259/" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <SocialLink title="Facebook" link="https://www.facebook.com/oscar.neira0/" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <SocialLink title="Nextjs" link="https://vercel.com/devphaoxs-projects" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
