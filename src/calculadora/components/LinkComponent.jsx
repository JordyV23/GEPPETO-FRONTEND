import { Link } from "react-router-dom";

/**
 * Componente de enlace personalizado.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.id - Identificador único para el enlace.
 * @param {string} props.link - URL del destino del enlace.
 * @param {JSX.Element} props.icon - Elemento JSX que representa el icono del enlace.
 * @param {string} props.text - Texto del enlace.
 * @returns {JSX.Element} Elemento JSX que representa un enlace con icono y texto.
 */
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
