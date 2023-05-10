import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import css from './App.module.css'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactsList/ContactsList'

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
  componentDidMount() {
    const localContacts = localStorage.getItem("contacts");
    if (localContacts) {
      this.setState({
        contacts: JSON.parse(localContacts)
      })
    }
  }
  componentDidUpdate(prevProps, prevState) { 
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  } 
  changeContacts = (name, number) => {
     if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())){
      alert(`${name} is already in contacts`)
    } else {
      const newContact = { 'id': nanoid(), 'name': name, 'number': number }
      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }))
    }
  }

  changeFilter = ({target:{name, value}}) => {
    this.setState({
      [name]:value,
    })
  }
  deleteContact = idContact => {
      this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact)
    }))
  }
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm onSubmit={this.changeContacts} />
        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter
          filter={filter}
          onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </div>
    )
  }
}
 
export default App