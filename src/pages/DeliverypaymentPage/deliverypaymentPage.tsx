import React from 'react';

import style from './deliverypaymentPage.module.css';

export const DeliverypaymentPage = () => {
  return (
    <form className={style.center}>
      <div className={style.block}>
        <h2>Оплата доставки</h2>
        <div className={style.radioBlock}>
          <div className={style.radio}>
            <input type='radio' name='paymentPerson' checked />
            <p>Получатель</p>
          </div>
          <div className={style.radio}>
            <input type='radio' name='paymentPerson' />
            <p>Отправитель</p>
          </div>
        </div>
        <div className={style.buttonBlock}>
          <button className={style.returnButton}>Назад</button>
          <button className={style.continueButton}>Пролжить</button>
        </div>
      </div>
    </form>
  );
};
