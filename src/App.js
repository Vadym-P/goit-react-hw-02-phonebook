import React, { Component } from 'react';
import Form from './components/Form';
import Section from './components/Section';
import ContactsList from './components/ContactsList';
// import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Form
            onSubmit={this.handleSubmit}
            label="Name"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            name={this.state.name}
            onChange={this.handleNameChange}
            add="Add contact"
          />
        </Section>
        <Section title="Contacts">
          <ContactsList contactsList={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
