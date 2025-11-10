import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import styles from './textModalOpener.module.scss';
import { Modal } from '../modalComponent/Modal';
import { ThemeContext } from '../../contexts/ThemeContext';

export function TextModalOpener() {
  const { theme } = useContext(ThemeContext);
  const [inputText, setInputText] = React.useState<string>('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`${styles['text-modal-opener']} ${styles[theme]}`}>
      <input
        className={styles['text-modal-opener__input']}
        type={'text'}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className={styles['text-modal-opener__button']} onClick={handleOpenModal}>
        Кнопка открытия модального окна
      </button>
      {isModalOpen &&
        ReactDOM.createPortal(
          <Modal visible={isModalOpen} onClose={handleCloseModal}>
            <p>{inputText}</p>
          </Modal>,
          document.body
        )}
    </div>
  );
}
