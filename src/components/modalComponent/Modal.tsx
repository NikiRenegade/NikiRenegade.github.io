import React from 'react';
import './modal.module.scss';
interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ visible, children, onClose }: ModalProps) {
  if (visible) {
    return (
      <div className="modal__overlay">
        <div className="modal__window">
          <button className="modal__close" onClick={onClose}>
            x
          </button>
          <div className="modal__content">{children}</div>
        </div>
      </div>
    );
  }
}
