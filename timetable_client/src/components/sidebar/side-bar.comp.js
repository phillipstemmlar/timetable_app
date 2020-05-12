import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { tableUpdateCell } from '../../actions';

import TextProp from './text-prop.comp';
import ColorProp from './color-prop.comp';

function SideBar() {
  const dispatch = useDispatch();

  const sideIsLeft = useSelector((state) => state.sideBarIsLeft);
  const timetable = useSelector((state) => state.timetable);

  function sideClass() {
    return sideIsLeft ? 'left' : 'right';
  }

  function getCell(c, r) {
    return getCelli(timetable.rowcount * c + r);
  }

  function getCelli(i) {
    return i >= 0 && i < timetable.colcount * timetable.rowcount
      ? timetable.cells[i]
      : null;
  }

  function getActiveCell() {
    return getCell(timetable.activeIndex);
  }

  function draw() {
    const activeCell = getActiveCell();
    return (
      <div className={'sidebar ' + sideClass()}>
        <div className="bar-header">
          <div className="title">Cell Data</div>
          <div className="subtitle">{'colName' + ', ' + 'rowNae'}</div>
          <div className="row-name"></div>
        </div>
        <div className="bar-props">
          <TextProp
            label="Text"
            name="text"
            value={(activeCell && activeCell.text) || 'NULL'}
            setValue={(value) => {
              dispatch(
                tableUpdateCell(timetable.activeIndex, {
                  ...activeCell,
                  text: value,
                })
              );
            }}
            tabIndex={1}
          />
          <TextProp
            label="Subtext"
            name="subtext"
            value={(activeCell && activeCell.subtext) || 'NULL'}
            setValue={(n) => {}}
            tabIndex={2}
          />
          <ColorProp
            label="Background Color"
            name="bgcolor"
            value={(activeCell && activeCell.bgcolor) || '#000'}
            setValue={(n) => {}}
            tabIndex={3}
          />
          <ColorProp
            label="Text Color"
            name="color"
            value={(activeCell && activeCell.color) || '#000'}
            setValue={(n) => {}}
            tabIndex={4}
          />
        </div>
      </div>
    );
  }

  return draw();
}

export default SideBar;
