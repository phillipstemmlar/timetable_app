import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import SidebarMoveReducer from './sidebar-move.reducer';
import TimetableReducer from './timetable.reducer';

const GlobalReducer = combineReducers({
  user: UserReducer,
  sideBarIsLeft: SidebarMoveReducer,
  timetable: TimetableReducer,
});

export default GlobalReducer;
