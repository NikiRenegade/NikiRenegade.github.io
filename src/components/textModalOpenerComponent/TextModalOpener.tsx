import React from 'react';
import './textModalOpener.module.scss';
import { Modal } from '../modalComponent/Modal';

export function TextModalOpener() {
  const [inputText, setInputText] = React.useState<string>('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="text-modal-opener">
      <input
        className="text-modal-opener__input"
        type={'text'}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="text-modal-opener__button" onClick={handleOpenModal}>Кнопка открытия модального окна</button>
      {isModalOpen && (
        <Modal visible={isModalOpen} onClose={handleCloseModal}>
          <p>{inputText}</p>
        </Modal>
      )}
    </div>
  );
}
