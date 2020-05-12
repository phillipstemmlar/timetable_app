import update from 'react-addons-update';
import { table, initTable } from '../extra';

const TimetableReducer = (state = initTable(), action) => {
  switch (action.type) {
    case 'COLCOUNT':
      return update(state, { colcount: action.payload.colcount });
    case 'ROWCOUNT':
      return update(state, { rowcount: action.payload.rowcount });
    case 'SET_ACTIVATE':
      return update(state, { activeIndex: action.payload.index });
    case 'SET_CELL':
      return update(state, {
        cells: {
          [action.payload.index]: action.payload.cell,
        },
      });
    case 'SET_TIMETABLE':
      return action.payload.timetable;
    default:
      return state;
  }
};

export default TimetableReducer;
