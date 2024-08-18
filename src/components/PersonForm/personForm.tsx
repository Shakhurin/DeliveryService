import React from 'react';

import style from './personForm.module.css';

export const PersonForm = ({ firstArg, secondArg, thirdArg, fourthArg }) => {
  return (
    <form className={style.form}>
      <article className={style.information}>
        <section className={style.inputBlock}>
          <h3 className={style.nameOfInput}>{firstArg}</h3>
          <input type='text' placeholder={firstArg} />
        </section>
        <section className={style.inputBlock}>
          <h3 className={style.nameOfInput}>{secondArg}</h3>
          <input type='text' placeholder={secondArg} />
        </section>
        <section className={style.inputBlock}>
          <h3 className={style.nameOfInput}>{thirdArg}</h3>
          <input type='text' placeholder={`${thirdArg} (при наличии)`} />
        </section>
        <section className={style.inputBlock}>
          <h3 className={style.nameOfInput}>{fourthArg}</h3>
          <input type='text' placeholder={fourthArg} />
        </section>
      </article>
      <div className={style.actionBlock}>
        <button className={style.actionGoBack}>Назад</button>
        <button className={style.actionContinue}>Продолжить</button>
      </div>
    </form>
  );
};
