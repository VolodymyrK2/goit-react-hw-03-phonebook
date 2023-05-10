import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './ContactForm.module.css'
const INITIAL_STATE = {
    name: '',
    number: ''
}
class ContactForm extends Component  {
    state = { ...INITIAL_STATE }
        
    hadleChange = ({ currentTarget: { value, name } }) => {
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (evt) => {
    evt.preventDefault();
    const {name,number}=this.state;
    this.props.onSubmit(name, number);
    this.reset();
    }
    reset = () => {
        this.setState({...INITIAL_STATE})
    }
    static propTypes = {
    onSubmit: PropTypes.func.isRequired
    };
    render() {
        const {name, number}=this.state
    return    (
            <form onSubmit={this.handleSubmit} className={css.form__container}>
                <label className={css.form__label}>
                    Name
                    <input className={css.form__input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.hadleChange}
                    value={name}
                    />
                </label>
                <label className={css.form__label}>
                    Number
                    <input className={css.form__input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                     onChange={this.hadleChange}
                    value={number}
                    />
                </label>
                <button className={css.form__button} type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;