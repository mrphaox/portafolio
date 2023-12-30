import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">¡Déjame crear tus productos!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          Siempre estoy abierto a discutir su proyecto, mejorar su presencia en
          línea, o ayudar con el diseño de su sitio web y convertir desafíos.
        </p>
        <a href="mailto:oscarne09@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            contáctame
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
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
