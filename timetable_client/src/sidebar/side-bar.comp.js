import React from 'react';
import PropTypes from 'prop-types';

function SideBar(props) {
  return (
    <div className="sidebar bar-right">
      <div className="title">Cell Data</div>
      <div className="cell-props">
        <div className="cell-label">Text</div>
        <div className="cell-value">My cell title</div>
        <div className="cell-label">Text</div>
        <div className="cell-value">This is a cell</div>
        <div className="cell-label">Row Name</div>
        <div className="cell-value">12:30</div>
        <div className="cell-label">Column Name</div>
        <div className="cell-value">Monday</div>
        <div className="cell-label">Cell Background Color</div>
        <div className="cell-value">Green</div>
        <div className="cell-label">Cell Text Color</div>
        <div className="cell-value">Green</div>
      </div>
    </div>
  );
}

SideBar.prototypes = {
  Cell: PropTypes.object,
  updateCell: PropTypes.func,
};

export default SideBar;
