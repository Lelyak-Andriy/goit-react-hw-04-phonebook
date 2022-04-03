import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import useLocaleStorage from './hooks/useLocaleStorage';

export default function App() {
  const [contacts, setContacts] = useLocaleStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addNewContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts`);
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const handleChangeFilter = e => setFilter(e.target.value);

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={addNewContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactsList
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
