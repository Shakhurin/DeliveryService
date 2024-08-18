import React from 'react';

import pencileIcon from '../../assets/icons/verificationPage/pencile.svg';
import style from './verificationPage.module.css';

export const VerificationPage = () => {
  return (
    <div className={style.blockCenter}>
      <div className={style.block}>
        <div className={style.article}> Проверка данных заказа</div>
        <section className={style.deliveryData}>
          <article className={style.blockData}>
            <div className={style.blockData__nameSection}>
              <div className={style.blockData__name}>Получатель</div>
              <img src={pencileIcon} className={style.blockData__icon} />
            </div>
            <div className={style.blockData__dataSection}>
              <div className={style.blockData__infoBlock}>
                <div className={style.blockData__infoTag}>ФИО</div>
                <div className={style.blockData__info1}>
                  Иванов Иван Иванович
                </div>
              </div>
              <div className={style.blockData__infoBlock}>
                <div className={style.blockData__infoTag}>Телефон</div>
                <div className={style.blockData__info2}>+7 913 123 45 67</div>
              </div>
            </div>
          </article>
          <article className={style.blockData}>
            <div className={style.blockData__nameSection}>
              <div className={style.blockData__name}>Отправитель</div>
              <img src={pencileIcon} className={style.blockData__icon} />
            </div>
            <div className={style.blockData__dataSection}>
              <div className={style.blockData__infoBlock}>
                <div className={style.blockData__infoTag}>ФИО</div>
                <div className={style.blockData__info1}>
                  Иванов Иван Иванович
                </div>
              </div>
              <div className={style.blockData__infoBlock}>
                <div className={style.blockData__infoTag}>Телефон</div>
                <div className={style.blockData__info2}>+7 913 123 45 67</div>
              </div>
            </div>
          </article>
          <article className={style.blockData}>
            <div className={style.blockData__nameSection}>
              <div className={style.blockData__name}>Откуда забрать</div>
              <img src={pencileIcon} className={style.blockData__icon} />
            </div>
            <div className={style.blockData__dataSection}>
              <div className={style.blockData__infoBlock}>
                <div className={style.blockData__infoTag}>Адрес</div>
                <div className={style.blockData__info1}>ул. Кирова, д. 86</div>
              </div>
              <div className={style.blockData__infoBlock}>
                <div className={style.blockData__infoTag}>Заметка</div>
                <div className={style.blockData__info2}>Офис ЦФТ</div>
              </div>
            </div>
          </article>
          <article className={style.blockData}>
            <div className={style.blockData__nameSection}>
              <div className={style.blockData__name}>Куда доставить</div>
              <img src={pencileIcon} className={style.blockData__icon} />
            </div>
            <div className={style.blockData__dataSection}>
              <div className={style.blockData__infoBlock}>
                <div className={style.blockData__infoTag}>Адрес</div>
                <div className={style.blockData__info1}>ул. Кирова, д. 86</div>
              </div>
              <div className={style.blockData__infoBlock}>
                <div className={style.blockData__infoTag}>Заметка</div>
                <div className={style.blockData__info2}>Офис ЦФТ</div>
              </div>
            </div>
          </article>
        </section>
        <section className={style.paymentData}>
          <div className={style.paymentData__priceBlock}>
            <p>
              Итог: <span className={style.paymentData__price}>780₽</span>
            </p>
          </div>
          <div className={style.paymentData__additionalInfo}>
            <p>
              Тариф:{' '}
              <span className={style.paymentData__Delivery}>
                Экспресс доставка до двери
              </span>
            </p>
          </div>
          <div className={style.paymentData__time}>
            <p>
              Срок: <span>1 рабочий день</span>
            </p>
          </div>
        </section>
        <div className={style.actionBlock}>
          <button
            className={`${style.actionBlock__backBtn} ${style.actionBlock__button}`}
          >
            Назад
          </button>
          <button
            className={`${style.actionBlock__sendBtn} ${style.actionBlock__button}`}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};
