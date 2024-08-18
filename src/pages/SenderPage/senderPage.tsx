import React from 'react';

import { PersonForm } from '../../components/PersonForm/personForm';
import style from './senderPage.module.css';

export const SenderPage = () => {
  return (
    <div className={style.center}>
      <div className={style.block}>
        <h2 className={style.pageArticle}>Отправитель</h2>
        <PersonForm
          firstArg='Фамилия'
          secondArg='Имя'
          thirdArg='Отчество'
          fourthArg='Номер телефона'
        />
      </div>
    </div>
  );
};
