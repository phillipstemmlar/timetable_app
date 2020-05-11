import React, { useState } from 'react';
import './styles/App.scss';

import Header from './header/header.comp';

function App() {
  const [user, setUser] = useState(null);
  const [timetables, setTimetables] = useState([]);
  const [selectedTimeTable, selectTimeTable] = useState(-1);

  function getSelectedTimeTable() {
    if (selectedTimeTable >= 0 && selectedTimeTable < timetables.length) {
      return timetables[selectedTimeTable];
    }
    return null;
  }

  return (
    <div id="App">
      <Header user={user} TimeTableName={getSelectedTimeTable()} />
    </div>
  );
}

export default App;
