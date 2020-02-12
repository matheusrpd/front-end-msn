/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';

const Modal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose} className="btn">Fechar</button>
      </section>
    </div>
  );
};

export default Modal;
