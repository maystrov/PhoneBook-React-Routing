/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import normalizeUser from '../utils/normalize';

function Edit({ editUser, replaceEditedContact }) {
  const user = normalizeUser(editUser.name, editUser.phone);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [phone, setPhone] = useState(user.phone);
  const navigate = useNavigate();

  const saveChanges = () => {
    const editedContact = {
      id: editUser.id,
      name: `${name} ${surname}`,
      phone,
    };
    replaceEditedContact(editedContact);
    navigate('/contacts');
  };
  return (
    <form className="formContact">
      <h2 style={{ marginBottom: 10 }}>Edit contact</h2>
      <div>
        Name:
        <input
          type="text"
          name="name"
          className="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        Surname:
        <input
          type="text"
          name="surname"
          className="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div>
        Phone:
        <input
          type="text"
          name="phone"
          className="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="button" onClick={saveChanges}>
        Save
      </button>
      <button type="button" onClick={() => navigate('/contacts')}>
        Cancel
      </button>
    </form>
  );
}

export default Edit;
