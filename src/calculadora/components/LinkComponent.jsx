import { Link } from "react-router-dom";

export const LinkComponent = ({ id, link, icon, text }) => {
  return (
    <>
      <Link
        id={id}
        to={link}
        className="hvr-grow flex items-center p-2 text-txt-light rounded-lg dark:text-white hover:bg-light-accent-2 dark:hover:bg-gray-700"
      >
        {icon}
        <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
      </Link>
    </>
  );
};
