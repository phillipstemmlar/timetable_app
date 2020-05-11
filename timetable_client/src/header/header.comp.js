import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const defualtTableName = 'Untitled Timetable';
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
    <div id="header">
      <div id="title">
        {tableName()}
        <div id="subtitle">{userName()}</div>
      </div>
      <div id="controls">
        <div className="control">
          <div className="btn">Undo</div>
        </div>
        <div className="control">
          <div className="btn">Redo</div>
        </div>
        <div className="control">
          <div className="btn">Share</div>
        </div>
        <div className="control">
          <div className="btn">Export</div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  User: PropTypes.object,
  TimeTableName: PropTypes.object,
};

export default Header;
