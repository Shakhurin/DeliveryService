import React, { useState } from 'react';

import Auto from '../../assets/icons/shippingIcons/auto.svg';
import Plane from '../../assets/icons/shippingIcons/plane.svg';
import style from './shippingMethodPage.module.css';

export const ShippingMethodPage = () => {
  const [shippingMethod, setShippingMethod] = useState();
  const [isFastMethodActive, setIsFastMethodActive] = useState(true);

  return (
    <article className={style.container}>
      <div className={style.container__helper}>
        <h2 className={style.article}>Способ отправки</h2>
        <div className={style.container__sections}>
          <section
            className={`${style.container__section} ${isFastMethodActive ? style.active : ''}`}
            onClick={() => setIsFastMethodActive(true)}
          >
            <div className={style.section__image}>
              <img src={Plane} alt='' />
            </div>
            <div className={style.section__info}>
              <div className={style.section__div}>
                <h3 className={style.div__article}>
                  Экспресс доставка до двери
                </h3>
                <p className={style.div__price}>780 ₽</p>
              </div>
              <p className={style.section__shipping}>1 рабочий день</p>
            </div>
          </section>
          <section
            className={`${style.container__section} ${!isFastMethodActive ? style.active : ''}`}
            onClick={() => setIsFastMethodActive(false)}
          >
            <div className={style.section__image}>
              <img src={Auto} alt='' />
            </div>
            <div className={style.section__info}>
              <div className={style.section__div}>
                <h3 className={style.div__article}>
                  Экспресс доставка до двери
                </h3>
                <p className={style.div__price}>780 ₽</p>
              </div>
              <p className={style.section__shipping}>1 рабочий день</p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
