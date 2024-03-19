
import PropTypes from 'prop-types';
import Style from "./CustomButton.module.css"
const CustomButton = ({ color, size, content }) => {
  return (
    <div>
      <button className={Style.btn} style={{ border: `1px solid ${color}`, color: `${color}`, fontSize: `${size}px` }}>
        {content}
      </button>
    </div>
  );
};

CustomButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  content: PropTypes.string
};

export default CustomButton;
