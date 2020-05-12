import React, { useState } from 'react';
import './scss/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { moveSidebarLeft, moveSidebarRight } from './actions';

import Header from './components/header/header.comp';
import SideBar from './components/sidebar/side-bar.comp';
import TimeTable from './components/timetable/timetable.comp';

function App() {
  const sideIsLeft = useSelector((state) => state.sideBarIsLeft);
  const dispatch = useDispatch();
  const sidebarWidth = 300;

  return (
    <div id="App">
      <Header TimeTableName={null} User={null} />
      <div
        id="body"
        style={
          sideIsLeft
            ? { marginLeft: sidebarWidth + 'px' }
            : { marginRight: sidebarWidth + 'px' }
        }
      >
        <SideBar />
        <TimeTable />
      </div>
    </div>
  );
}

export default App;
