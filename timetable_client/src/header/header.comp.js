import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const defualtTableName = 'Unnamed Timetable';
  const defualtUserName = 'Not logged in';

  function tableName() {
    return (
      (props.TimeTableName && props.TimeTableName.name) || defualtTableName
    );
  }

  function userName() {
    return (props.User && props.User.name) || defualtUserName;
  }

  return (
    <div id="Header">
      <div id="title">
        {tableName()}
        <div id="subtitle">{userName()}</div>
      </div>
      <div id="controls">
        <div className="control">Undo</div>
        <div className="control">Redo</div>
        <div className="control">Share</div>
        <div className="control">Export</div>
      </div>
    </div>
  );
}

Header.propTypes = {
  User: PropTypes.object.isRequired,
  TimeTableName: PropTypes.object.isRequired,
};

export default Header;
