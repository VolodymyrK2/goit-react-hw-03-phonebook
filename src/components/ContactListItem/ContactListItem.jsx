import PropTypes from 'prop-types'
import css from './ContactListItem.module.css'
const ContactListItem = ({name, number, onClick}) => {
  return (
    <li className={css.contact__item}>
      <p>{name} {number}</p>
      <button className={css.contact__btn} onClick={onClick} type="button">Delete</button>
    </li>  
  )
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ContactListItem