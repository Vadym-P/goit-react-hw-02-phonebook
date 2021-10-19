import React, { Component } from 'react';
import Form from './components/Form';
import Section from './components/Section';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formOnSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          ...data,
        },
      ],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const filteredContact = this.getFilteredContact();

    return (
      <div>
        <Section>
          <Form onSubmit={this.formOnSubmitHandler} />
        </Section>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Section title="Contacts">
          <ContactsList contactsList={filteredContact} />
        </Section>
      </div>
    );
  }
}

export default App;
