import React from "react";
import { SocialIcon } from "react-social-icons";

export const FooterIcon = ({iconName,link,title}) => {
  return (
    <a
      rel="noopener noreferrer"
      href={link}
      title={title}
      className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-purple-400 dark:text-gray-900"
    >
      <SocialIcon
        network={iconName}
        bgColor="#FFF"
        style={{ height: 35, width: 35 }}
      />
    </a>
  );
};
