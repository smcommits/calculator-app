import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => {
    props.clickHandler(buttonName);
  };

  return (
    <div className="buttons-container-wrapper">
      <div className="button-container button-group-0">
        <Button clickHandler={handleClick} name="AC" />
        <Button clickHandler={handleClick} name="+/-" />
        <Button clickHandler={handleClick} name="%" />
        <Button clickHandler={handleClick} name="/" />
      </div>

      <div className="button-container button-group-1">
        <Button clickHandler={handleClick} name="7" />
        <Button clickHandler={handleClick} name="8" />
        <Button clickHandler={handleClick} name="9" />
        <Button clickHandler={handleClick} name="x" />
      </div>

      <div className="button-container button-group-2">
        <Button clickHandler={handleClick} name="4" />
        <Button clickHandler={handleClick} name="5" />
        <Button clickHandler={handleClick} name="6" />
        <Button clickHandler={handleClick} name="-" />
      </div>

      <div className="button-container button-group-3">
        <Button clickHandler={handleClick} name="1" />
        <Button clickHandler={handleClick} name="2" />
        <Button clickHandler={handleClick} name="3" />
        <Button clickHandler={handleClick} name="+" />
      </div>

      <div className="button-container button-group-4">
        <Button clickHandler={handleClick} name="0" />
        <Button clickHandler={handleClick} name="." />
        <Button clickHandler={handleClick} name="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export { ButtonPanel as default };
