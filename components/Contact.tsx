import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper p-6 bg-gray-900 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-white mb-4 animate-fadeIn">
        ¡Déjame crear tus productos!
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        Estoy abierto a discutir su proyecto, mejorar su presencia en línea o
        ayudar con el diseño de su sitio web.
      </p>
      <a href="mailto:oneira1323@gmail.com" aria-label="Enviar correo">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-600 hover:shadow-lg transition duration-300">
          Contáctame
        </button>
      </a>
      <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/mrphaox" />
        <SocialLink
          title="Youtube"
          link="https://www.youtube.com/channel/UCw7rSN4Igb-FOyuBq9QGang"
        />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/oscar-alberto-neira-vaca-75b387259/"
        />
        <SocialLink
          title="Facebook"
          link="https://www.facebook.com/oscar.neira0/"
        />
        <SocialLink
          title="Nextjs"
          link="https://vercel.com/devphaoxs-projects"
        />
      </div>
    </div>
  );
};

export default Contact;
