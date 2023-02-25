/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Modal({ deleteContact, isActive, hideModal, deleteId }) {
  const onYesClick = () => {
    deleteContact(deleteId);
    hideModal();
  };
  return (
    <div className={isActive ? 'modal active' : 'modal'}>
      <div className="content">
        <h3>Are you sure you want delete contact?</h3>
        <button type="button" onClick={onYesClick}>
          Yes
        </button>
        <button type="button" onClick={hideModal}>
          No
        </button>
      </div>
    </div>
  );
}

export default Modal;
