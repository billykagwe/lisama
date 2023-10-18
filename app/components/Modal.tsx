/** @format */

import React from "react";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, closeModal, children }: IProps) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";
  const overlayClasses = isOpen
    ? "fixed inset-0 bg-black opacity-50"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div
        className={`modal-overlay ${overlayClasses}`}
        onClick={closeModal}></div>
      <div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto'>
        <div className='modal-content py-4 text-left px-6'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
