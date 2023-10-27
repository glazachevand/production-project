import { Counter } from 'entities/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage: React.FC = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('Главная страница')}
      {/* <Input value={value} onChange={onChange} placeholder={t('Введите текст')} /> */}
      {/* <Counter /> */}
    </div>
  );
};

export default MainPage;
