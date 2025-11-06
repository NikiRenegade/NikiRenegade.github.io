import React from 'react';
import './header.scss';
import { Logo } from '../logoComponent/Logo';

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <nav className="header__nav">
        <a className="header__link" href="/">Главная</a>
        <a className="header__link" href="/login">Вход</a>
        <a className="header__link" href="/register">Регистрация</a>
      </nav>
    </header>
  );
}
