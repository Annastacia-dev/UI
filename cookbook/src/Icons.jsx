import { AiFillHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';
import { GoHeartFill } from 'react-icons/go';

const icons = [
  {
    title: 'home',
    icon: <AiFillHome />,
  },
  {
    title: 'search',
    icon: <FiSearch />,
  },
  {
    title: 'shop',
    icon: <MdShoppingCart />,
  },
  {
    title: 'favourites',
    icon: <GoHeartFill />,
  },
];

const Icons = () => {
  return (
    <>
      {icons.map((icon, index) => (
        <li
          key={icon.title}
          className={`py-3 px-5 hover:bg-secondary/10 hover:text-secondary flex items-center gap-3 ${index === 0 ? 'md:rounded-l-full' : ''}`}
          title={icon.title}
        >
          {icon.icon}
          <span className="md:hidden capitalize text-sm">{icon.title}</span>
        </li>
      ))}
    </>
  );
};

export default Icons;
