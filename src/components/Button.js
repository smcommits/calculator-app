import PropTypes from 'prop-types';

const Button = (props) => {
  const { clickHandler, name } = props;

  const handleClick = () => {
    clickHandler(name);
  };

  return (
    <button className="calculator-button" type="submit" onClick={handleClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: 'Some Button',
};

export { Button as default };
