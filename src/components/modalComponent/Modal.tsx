import React from 'react';
import './modal.scss';
interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

export function Modal({ visible, children }: ModalProps) {
  if (visible) {
    return (
      <div className="modal__overlay">
        <div className="modal__window">
          <button className="modal__close">x</button>
          <div className="modal__content">{children}</div>
        </div>
      </div>
    );
  }
}