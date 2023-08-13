import React from "react";
import { SocialIcon } from "react-social-icons";

export const FooterIcon = ({ iconName, link, title }) => {
  return (
    <SocialIcon
      url={link}
      network={iconName}
      label={title}
      bgColor="#FFF"
      style={{ height: 35, width: 35 }}
    />
  );
};
