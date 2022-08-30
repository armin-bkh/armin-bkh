import { BsDot } from 'react-icons/bs';

const SkillItem = ({ skill, Icon }) => {
  return (
    <li className="flex flex-col justify-start p-2 transition hover:shadow-md">
      <h4 className="text-emerald-500 font-medium text-2xl md:text-3xl mb-2 flex items-center">
        {Icon && <Icon className="mr-2 text-lg text-gray-200" />}
        {skill.title}
      </h4>
      {skill.description.length > 2 ? (
        <p className="text-justify text-xs md:text-sm text-gray-400">{skill.description}</p>
      ) : (
        <ul>
          {skill.description.map((des, index) => (
            <li className="text-justify text-sm text-gray-400 flex items-start" key={index}>
              <BsDot className="text-2xl" />
              {des}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SkillItem;
