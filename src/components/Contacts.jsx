/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from './Modal';
import User from './User';

function Contacts({ contacts, deleteContact, selectUserId, isLoaded }) {
  const [modal, setModal] = useState(false);
  const [modalDeleteId, setDeleteId] = useState(0);

  const getDeleteId = (deleteId) => {
    setDeleteId(deleteId);
  };

  const showModal = () => {
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className="contacts">
      {!isLoaded ? (
        <h2>Loading...</h2>
      ) : (
        <h2 style={{ marginBottom: '20px' }}>Your contacts</h2>
      )}
      <hr />
      <Modal
        isActive={modal}
        hideModal={hideModal}
        deleteId={modalDeleteId}
        deleteContact={deleteContact}
      />

      <div className="contacts-list">
        {contacts.map((user) => (
          <User
            key={user.id}
            {...user}
            deleteContact={deleteContact}
            selectUserId={selectUserId}
            showModal={showModal}
            deleteId={getDeleteId}
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
