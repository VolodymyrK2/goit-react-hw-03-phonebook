
import PropTypes from 'prop-types'
import css from './Filter.module.css'
const Filter = ({value, onChange}) => {
  return (
    <>
      <p className={css.filer__text}>Find contacts by name</p>
          <input className={css.filer__input} name = 'filter' type="text" value={value} onChange={onChange} />
      </>
  )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func 
}

export default Filter