import PropTypes from 'prop-types'
import ContactListItem from 'components/ContactListItem/ContactListItem'
const ContactList = ({contacts, onDelete}) => {
  return (
              <ul>
              {contacts.map(({id, name, number}) => (
                  <ContactListItem
                  key={id}
                  name={name}
                  number={number}
                  onClick = {()=>onDelete(id)}
                  />
              ))}
</ul>
  
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
  })),
  onDelete: PropTypes.func.isRequired
}

export default ContactList