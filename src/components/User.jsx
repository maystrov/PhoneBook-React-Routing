/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import normalizeUser from '../utils/normalize';

function User({ name, phone, id, selectUserId, showModal, deleteId }) {
  const user = normalizeUser(name, phone);

  const onDeleteClick = () => {
    showModal();
    deleteId(id);
  };

  return (
    <div className="user">
      <div className="name">{user.name}</div>
      <div className="surname">{user.surname}</div>
      <div className="phone">{user.phone}</div>
      <div className="button-section">
        <NavLink text="navlink" to="/edit">
          <button
            className="editBtn"
            type="button"
            onClick={() => selectUserId(id)}
          >
            Edit
          </button>
        </NavLink>

        <button
          className="deleteBtn"
          type="button"
          // onClick={() => deleteContact(id)}
          onClick={onDeleteClick}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default User;
