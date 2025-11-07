import React, { useContext } from 'react';
import styles from './header.module.scss';
import { Logo } from '../logoComponent/Logo';
import { ThemeSwitcher } from '../themeSwitcherComponent/ThemeSwitcher';
import { LanguageSwitcher } from '../languageSwitcherComponent/LanguageSwitcher';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
export function Header() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <header className={`${styles.header} ${styles[theme]}`} data-test={theme}>
      <div className={styles['header__logo']}>
        <Logo />
      </div>
      <nav className={styles['header__nav']}>
        <a className={styles['header__nav__link']} href="/">
          {t('home')}
        </a>
        <a className={styles['header__nav__link']} href="/login">
          {t('login')}
        </a>
        <a className={styles['header__nav__link']} href="/register">
          {t('register')}
        </a>
      </nav>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </header>
  );
}
