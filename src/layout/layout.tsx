import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header/header';
import style from './layout.module.css';

export const Layout = () => {
  return (
    <div className={style.application}>
      <Header />
      <Outlet />
    </div>
  );
};
