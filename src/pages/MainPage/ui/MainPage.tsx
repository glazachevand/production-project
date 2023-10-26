import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная страница')}
      {/* <Counter /> */}
    </div>
  );
};

export default MainPage;
