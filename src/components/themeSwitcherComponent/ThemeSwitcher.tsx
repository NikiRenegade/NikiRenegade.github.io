import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './themeSwitcher.module.scss';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className={styles['theme-switcher']} onClick={toggleTheme}>
      {theme === 'light' ? 'Light 🌞' : 'Dark 🌜'}
    </button>
  );
}
