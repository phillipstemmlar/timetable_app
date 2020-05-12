export const table = (_rowcount, _colcount, _cells, colh, rowh) => {
  return {
    cells: [..._cells],
    colcount: _colcount,
    rowcount: _rowcount,
    colheaders: [...colh],
    rowheaders: [...rowh],
    activeIndex: -1,
  };
};

export const initTable = () => {
  const cc = 4;
  const ch = [...weekDays].splice(0, cc);
  const rc = 3;
  const rh = [...dayHours].splice(0, rc);
  const cells = [
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
    { text: '', subtext: '', bgcolor: '#fff', color: '#000' },
  ];

  return table(rc, cc, cells, ch, rh);
};

const weekDays = [
  'Monday',
  'Teusday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const dayHours = ['04:00', '08:00', '12:00', '16:00', '20:00', '24:00'];
