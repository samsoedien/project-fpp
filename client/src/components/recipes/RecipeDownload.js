import React from 'react';

export default () => {
  return (
    <div>
      <div className="btn-group dropup">
        <button type="button" className="btn btn-default">Download</button>
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="caret" />
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a href="#">Save as .STL</a></li>
          <li><a href="#">Save as .gcode</a></li>
        </ul>
      </div>
    </div>
  );
};
