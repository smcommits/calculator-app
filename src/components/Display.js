import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next } = props;

  return (
    <div className="displayContainer">
      <h4 className="display">
        {total + next }
      </h4>
    </div>
  );
};

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Display;
