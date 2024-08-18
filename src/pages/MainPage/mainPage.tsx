import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Plane from '../../assets/PlanetAndPlane.svg';
import { useGetDeliveryPoints } from '../../hooks/useGetDeliveryPoints';
import { Package, useGetPackages } from '../../hooks/useGetPackages';
import style from './mainPage.module.css';

export const MainPage = () => {
  interface Formochka {
    city1: {
      id?: number;
      name?: string;
      latitude: number;
      longitude: number;
    };
    city2: {
      id?: number;
      name?: string;
      latitude: number;
      longitude: number;
    };
    package: Package;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isAccurate, setIsAccurate] = useState(false);
  const [accurateSize, setAccurateSize] = useState<Package>({
    width: 0,
    height: 0,
    length: 0,
    weight: 0,
  });
  const [currentPackage, setCurrentPackage] = useState<Package>({});

  const [packages, isLoadingPackages] = useGetPackages();
  const [points, isLoadingPoints] = useGetDeliveryPoints();

  const { register, handleSubmit } = useForm<Formochka>();
  const onSubmit: SubmitHandler<Formochka> = (data) => {
    if (
      Object.keys(data.city1).length === 0 ||
      Object.keys(data.city2).length === 0 ||
      (isAccurate && Object.keys(accurateSize).length < 1) ||
      (!isAccurate && Object.keys(currentPackage).length < 1)
    ) {
      console.log('хуйня переделывай');
      return;
    }
    let city1 = {};
    let city2 = {};
    for (let i = 0; i < points.length; i++) {
      if (points[i].name == data.city1) {
        city1 = points[i];
      }
      if (points[i].name == data.city2) {
        city2 = points[i];
      }
    }
    console.log(city1, city2, isAccurate ? accurateSize : currentPackage);
  };

  const getAccuratePackage = (el: {}) => {
    setCurrentPackage(el);
    setIsOpen(false);
  };

  const getPackageSize = (e) => {
    let updatedName = e.target.name;
    let updatedValue = +e.target.value;
    setAccurateSize((accurateSize: Package) => ({
      ...accurateSize,
      [updatedName]: updatedValue,
    }));
  };

  return (
    <div className={style.block}>
      <div className={style.content}>
        <img src={Plane} alt='изображение доставки' />
        <h1>ЦФТ доставка - быстро, удобно, надежно!</h1>
      </div>
      <form
        className={style.deliveryForm}
        id='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Рассчитать доставку</h2>
        <div className={style.formField}>
          <label htmlFor='cityFrom'>Город отправки</label>
          <select className={style.marker} {...register('city1')}>
            <option value={''}>Не выбрано</option>
            {isLoadingPoints
              ? ''
              : points.map((el) => {
                  return <option key={el.id}>{el.name}</option>;
                })}
          </select>
        </div>
        <div className={style.formField}>
          <label htmlFor='cityFor'>Город назначения</label>
          <select {...register('city2')} className={style.markerTwo}>
            <option value={''}>Не выбрано</option>
            {isLoadingPoints
              ? ''
              : points.map((el) => {
                  return <option key={el.id}>{el.name}</option>;
                })}
          </select>
        </div>
        <div className={`${style.formField}  ${style.dropdownFormField}`}>
          <label htmlFor='packageSize'>Размер посылки</label>
          <div
            className={`${style.dropdown}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isAccurate ? (
              <p>
                {Object.keys(currentPackage).length > 0
                  ? `${currentPackage.name}, ${currentPackage.length}x${currentPackage.width}x${currentPackage.height} см`
                  : 'Не выбрано'}
              </p>
            ) : (
              <p>
                {accurateSize.length}x{accurateSize.width}x{accurateSize.height}{' '}
                см, {accurateSize.weight} кг
              </p>
            )}
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
              {isLoadingPackages
                ? ''
                : packages.map((el) => {
                    return (
                      <div
                        className={style.choiceItem}
                        key={el.id}
                        onClick={() => {
                          getAccuratePackage(el);
                        }}
                      >
                        {el.name}, {`${el.length}x${el.width}x${el.height} см`}
                      </div>
                    );
                  })}
            </div>
            <div
              className={`${style.choiceTabsPannel} ${isAccurate ? style.choiceTabsPannel_active : ''}`}
              onChange={getPackageSize}
            >
              <div className={style.choiceForm}>
                <p>Длина</p>
                <input name='length' type='number' placeholder='см' min={0} />
              </div>
              <div className={style.choiceForm}>
                <p>Ширина</p>
                <input name='width' type='number' placeholder='см' min={0} />
              </div>
              <div className={style.choiceForm}>
                <p>Высота</p>
                <input name='height' type='number' placeholder='см' min={0} />
              </div>
              <div className={style.choiceForm}>
                <p>Вес</p>
                <input name='weight' type='number' placeholder='кг' min={0} />
              </div>
            </div>
          </div>
        </div>
        <button className={style.formSubmitBtn}>Рассчитать</button>
      </form>
    </div>
  );
};
