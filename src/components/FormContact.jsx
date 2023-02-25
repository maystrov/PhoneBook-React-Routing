/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormContact({ addContact, title, buttonText }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [filledForm, setfilled] = useState(true);
  const navigate = useNavigate();

  const onAddContactHandle = () => {
    const newContact = { name: `${name} ${surname}`, phone, id: Date.now() };
    if (name || phone) {
      addContact(newContact);
      setfilled(true);
      navigate('/contacts ');
    }
    setfilled(false);
  };

  return (
    <form className="formContact">
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      {!filledForm && <h3>Fill the inputs!</h3>}
      <div>
        Name:
        <input
          type="text"
          className="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onFocus={() => setfilled(true)}
        />
      </div>
      <div>
        Surname:
        <input
          type="text"
          className="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div>
        Phone:
        <input
          type="text"
          className="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="button" onClick={onAddContactHandle}>
        {buttonText}
      </button>
      <button type="button" onClick={() => navigate('/contacts')}>
        Cancel
      </button>
    </form>
  );
}

export default FormContact;
