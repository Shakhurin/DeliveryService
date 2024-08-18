import React from 'react';

import { PersonForm } from '../../components/PersonForm/personForm';
import style from './destinationPage.module.css';

export const DestinationPage = () => {
  return (
    <div className={style.center}>
      <div className={style.block}>
        <h2>Куда доставить</h2>
        <PersonForm
          firstArg={'Улица'}
          secondArg={'Номер дом'}
          thirdArg={'Номер квартиры'}
          fourthArg={'Заметка'}
        />
      </div>
    </div>
  );
};
