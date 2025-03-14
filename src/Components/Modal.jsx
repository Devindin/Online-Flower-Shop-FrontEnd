// src/components/Modal.js
import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-black font-bold">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
