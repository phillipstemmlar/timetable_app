import React from 'react';
import PropTypes from 'prop-types';

function TextProp(props) {
  return (
    <div className="bar-prop">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
}

TextProp.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TextProp;
