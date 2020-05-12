import React from 'react';
import PropTypes from 'prop-types';

function Cell({ cell, key, update, activate }) {
  function cellStyle() {
    return {
      backgroundColor: (cell && cell.bgcolor) || 'rgba(0, 0, 0, 0.1)',
      color: (cell && cell.color) || 'red',
      border: cell.active ? '1px solid orange' : 'none',
      borderTop: cell.active ? '1px solid orange' : '1px solid black',
    };
  }

  function activateMe() {
    activate(cell);
  }

  return (
    <div key={key} className="cell" style={cellStyle()} onClick={activateMe()}>
      <div className="text">{(cell && cell.text) || 'NULL'}</div>
      <div className="subtext">{cell && cell.subtext}</div>
    </div>
  );
}

Cell.propTypes = {
  cell: PropTypes.object,
  key: PropTypes.string,
  update: PropTypes.func,
  activate: PropTypes.func,
};

export default Cell;
