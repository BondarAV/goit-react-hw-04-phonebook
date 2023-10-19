import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid/non-secure';

import { FormComponent } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const addContact = (name, number) => {
    if (
      contacts.find(
        currentContact =>
          currentContact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prev => [
        ...prev,
        { id: nanoid(), name: name, number: number },
      ]);
    }
  };

  const handleFilter = newFilter => {
    setFilter(newFilter);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filterNames = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className="app">
      <h1 className="app-title">Phonebook</h1>

      <FormComponent addContact={addContact} />

      <h2 className="title">Contacts</h2>

      <Filter getNewFilter={handleFilter} />

      {
        <ContactList
          filteredNames={filterNames()}
          deleteContact={deleteContact}
        />
      }
    </div>
  );
};
