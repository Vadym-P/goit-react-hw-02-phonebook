import React, { Component } from 'react';
import Form from './components/Form';
import Section from './components/Section';
import ContactsList from './components/ContactsList';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <div>
        <Section>
          <Form onSubmit={this.formOnSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <ContactsList contactsList={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
