import React from 'react';

import { PersonForm } from '../../components/PersonForm/personForm';
import style from './departurefromPage.module.css';

export const DeparturefromPage = () => {
  return (
    <div className={style.center}>
      <div className={style.block}>
        <h2>Откуда забрать</h2>
        <PersonForm
          firstArg={'Улица'}
          secondArg={'Номер дома'}
          thirdArg={'Номер квартиры'}
          fourthArg={'Заметка'}
        />
      </div>
    </div>
  );
};
