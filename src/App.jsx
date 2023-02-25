/* eslint-disable react/jsx-wrap-multilines */
import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Contacts from './components/Contacts';
import Edit from './components/Edit';
import FormContact from './components/FormContact';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import data from './db/db';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editUser, setEditUser] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicodeJENYA.com/users')
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        alert(error);
        // console.log('download problem');
      })
      .finally(() => setIsLoaded(true));
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
    // setFormShown(false);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((user) => user.id !== id));
  };

  const selectId = (id) => {
    const [editContact] = contacts.filter((user) => user.id === id);
    setEditUser(editContact);
  };

  const replaceEditedContact = (editedContact) => {
    const editedList = contacts.map((contact) => {
      if (contact.id === editedContact.id) {
        return editedContact;
      }
      return contact;
    });
    setContacts(editedList);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h3>clicked user id: {selectUserId}</h3> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contacts"
              element={
                <Contacts
                  contacts={contacts}
                  deleteContact={deleteContact}
                  selectUserId={selectId}
                  isLoaded={isLoaded}
                />
              }
            />
            <Route
              path="/formContact"
              element={
                <FormContact
                  buttonText="Add contact"
                  title="Add new contact:"
                  addContact={addContact}
                />
              }
            />
            <Route
              path="/edit"
              element={
                <Edit
                  editUser={editUser}
                  replaceEditedContact={replaceEditedContact}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
