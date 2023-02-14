import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const [t, i18n] = useTranslation('global');

  return <div>

    <h1>
      {t('header.About')}
    </h1>
  </div>;
};

export const About2 = () => {
  return <div>About</div>;
};
