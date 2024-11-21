import { NavLink } from 'react-router-dom';
import { FC } from 'react';

interface OptionProps {
  title: string;
  to: string;
}

const Option: FC<OptionProps> = ({ title, to }) => {
  return (
    <li>
      <NavLink
        className={({isActive}) =>
          isActive
            ? "font-medium text-sm text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
            : "font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
        }
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default Option;