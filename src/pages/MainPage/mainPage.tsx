import { useState } from 'react';

import Plane from '../../assets/PlanetAndPlane.svg';
import style from './mainPage.module.css';

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccurate, setIsAccurate] = useState(false);

  const packages: string[] = [
    'Конверт, 42х36х5 см',
    'Короб XS, 17х12х9 см',
    'Короб S, 23х9х10 см',
    'Короб M, 33х25х15 см',
    'Короб L, 32х25х38 см',
    'Короб XL, 60х35х30 см',
    'Большой короб, 60х60х30 см',
    'Чемодан, 55х35х77 см',
    'Палета, 120х120х80 см',
  ];

  return (
    <div className={style.block}>
      <div className={style.content}>
        <img src={Plane} alt='изображение доставки' />
        <h1>ЦФТ доставка - быстро, удобно, надежно!</h1>
      </div>
      <form action='submit' className={style.deliveryForm}>
        <h2>Рассчитать доставку</h2>
        <div className={style.formField}>
          <label htmlFor='cityFrom'>Город отправки</label>
          <select name='cityFrom' className={style.marker}>
            <option value=''>Москва</option>
            <option value=''>Питер</option>
          </select>
        </div>
        <div className={style.formField}>
          <label htmlFor='cityFor'>Город назначения</label>
          <select name='cityFor' className={style.markerTwo}>
            <option value=''>Москва</option>
            <option value=''>Питер</option>
          </select>
        </div>
        <div className={`${style.formField}  ${style.dropdownFormField}`}>
          <label htmlFor='packageSize'>Размер посылки</label>
          <div
            className={`${style.dropdown}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>Не выбрано</p>
          </div>
          <div
            className={`${style.dropdownChoice} ${!isOpen ? style.dropdownChoice_active : ''}`}
          >
            <div className={style.chioceTabs}>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setIsAccurate(false);
                }}
                className={`${style.choiceTabsAction} ${!isAccurate ? style.choiceTabsAction_active : ''}`}
              >
                Примерные
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setIsAccurate(true);
                }}
                className={`${style.choiceTabsAction} ${isAccurate ? style.choiceTabsAction_active : ''}`}
              >
                Точные
              </button>
            </div>
            <div
              className={`${style.choiceTabsPannel} ${!isAccurate ? style.choiceTabsPannel_active : ''}`}
            >
              {packages.map((el: string, index: number) => {
                return (
                  <div className={style.choiceItem} key={index}>
                    {el}
                  </div>
                );
              })}
            </div>
            <div
              className={`${style.choiceTabsPannel} ${isAccurate ? style.choiceTabsPannel_active : ''}`}
            >
              <div className={style.choiceForm}>
                <p>Длина</p>
                <input type='number' placeholder='см' />
              </div>
              <div className={style.choiceForm}>
                <p>Ширина</p>
                <input type='number' placeholder='см' />
              </div>
              <div className={style.choiceForm}>
                <p>Высота</p>
                <input type='number' placeholder='см' />
              </div>
              <div className={style.choiceForm}>
                <p>Вес</p>
                <input type='number' placeholder='кг' />
              </div>
            </div>
          </div>
        </div>
        <button className={style.formSubmitBtn}>Рассчитать</button>
      </form>
    </div>
  );
};
