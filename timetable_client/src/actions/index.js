//===================AUTHENTICATION=======================

export const login = (name) => {
  return {
    type: 'LOGIN',
    payload: name,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: '',
  };
};

//===================SIDEBAR=======================

export const moveSidebarLeft = () => {
  return { type: 'LEFT' };
};

export const moveSidebarRight = () => {
  return { type: 'RIGHT' };
};

//===================TIMETABLE=======================

export const tableSetColCount = (n) => {
  return { type: 'COLCOUNT', payload: { colcount: n } };
};

export const tableSetRowCount = (n) => {
  return { type: 'ROWCOUNT', payload: { rowcount: n } };
};

export const tableActivateIndex = (i) => {
  return { type: 'SET_ACTIVATE', payload: { index: i } };
};

export const tableDeactivateIndex = () => {
  return { type: 'SET_ACTIVATE', payload: { index: -1 } };
};

export const tableUpdateCell = (i, cellobj) => {
  return { type: 'SET_CELL', payload: { index: i, cell: cellobj } };
};

export const tableSetTimetable = (table) => {
  return { type: 'SET_TIMETABLE', payload: { timetable: table } };
};
