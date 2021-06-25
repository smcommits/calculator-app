import PropTypes from 'prop-types';

const Button = (props) =>  {
  return (
    <button className ="calculator-button">
      {props.name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string
}

export {Button as default}
