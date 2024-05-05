import React from 'react';
import style from './header.module.css';
import Logo from '../../assets/Logo.svg';
import PersonIcon from '../../assets/icons/headerIcons/Person.svg';
import ExitIcon from '../../assets/icons/headerIcons/Exit.svg';
import ClockIcon from '../../assets/icons/headerIcons/Clock.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className={style.block}>
        <div className={style.nav}>
          <Link to='#'>
            <img src={Logo} alt='логотип' />
          </Link>
          <Link to='#'>
            <img src={PersonIcon} alt='иконка профиля' />
            <p>Профиль</p>
          </Link>
          <Link to='#'>
            <img src={ClockIcon} alt='иконка истории' />
            <p>История</p>
          </Link>
        </div>
        <div className={style.leftAcc}>
          <Link to='#'>
            <img src={ExitIcon} alt='иконка выхода' />
            <p>Выход</p>
          </Link>
        </div>
      </div>
    </header>
  );
};
