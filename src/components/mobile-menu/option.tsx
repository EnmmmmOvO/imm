import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface OptionProps {
  title: string;
  to: string;
}

const Option : FC<OptionProps> = ({ title, to }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `flex font-medium text-sm py-1.5 ${
            isActive ? "text-white" : "text-slate-300 hover:text-white"
          }`
        }
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default Option;