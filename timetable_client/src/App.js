import React, { useState } from 'react';
import Header from './header/header.comp';
import SideBar from './sidebar/side-bar.comp';
import './styles/App.scss';

function App() {
  const [user, setUser] = useState(null);
  const [timetables, setTimetables] = useState([]);
  const [selectedTimeTable, selectTimeTable] = useState(-1);
  const [selectedCell, updateCell] = useState({});

  function getSelectedTimeTable() {
    if (selectedTimeTable >= 0 && selectedTimeTable < timetables.length) {
      return timetables[selectedTimeTable];
    }
    return null;
  }

  return (
    <div id="App">
      <Header TimeTableName={null} User={null} />
      <div id="body">
        <SideBar cell={null} />
      </div>
    </div>
  );
}

export default App;
