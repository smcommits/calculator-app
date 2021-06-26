import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;

  return (
    <button className="calculator-button" type="submit">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'Some Button',
};

export { Button as default };
