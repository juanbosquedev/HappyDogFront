
import PropTypes from 'prop-types';
import { IconType } from 'react-icons';
import Button from 'react-bootstrap/Button';

const CustomButton = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`w-full ${outline ? 'btn-outline-primary' : 'btn-primary'} ${small ? 'btn-sm' : ''} ${custom ? custom : ''}`}
    >
      {icon && <IconType size={24} />} {label}
    </Button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  custom: PropTypes.string,
  icon: PropTypes.elementType,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
