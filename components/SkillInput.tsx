interface Props {
  title: string;
  link: string;
}
const SkillInput = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <p
        className=" border border-emerald-800 px-6 py-2 text-lg 
    tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-emerald-600
    hover:bg-black rounded-lg duration-300"
      >
        {title}

      </p>
      </a>
  );
};

export default SkillInput;
