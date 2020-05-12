import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tableSetTimetable } from '../../actions';

import Cell from './cell.comp';

function TimeTable() {
  const dispatch = useDispatch();
  const timetable = useSelector((state) => state.timetable);

  return <div className="timetable"></div>;
}

export default TimeTable;
