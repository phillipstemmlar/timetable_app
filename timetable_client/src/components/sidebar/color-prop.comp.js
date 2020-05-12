import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

function ColorProp(props) {
  const [focused, setFocus] = useState(false);

  const pillHeight = 20;

  return (
    <div className="bar-prop">
      <label htmlFor={props.name}>{props.label}</label>
      <div
        tabIndex={props.tabIndex}
        className="color-pill"
        style={{
          backgroundColor: props.value,
          position: 'relative',
          height: pillHeight + 'px',
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <div
          style={{
            display: focused ? 'flex' : 'none',
            position: 'absolute',
            zIndex: '2',
            top: pillHeight + 2 + 'px',
            left: '0px',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <ChromePicker
            color={props.value}
            onChange={(color) => props.setValue(color.hex)}
            onChangeComplete={(color) => props.setValue(color.hex)}
            disableAlpha={true}
          />
        </div>
      </div>
    </div>
  );
}

ColorProp.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default ColorProp;
