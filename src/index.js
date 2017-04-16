import React from 'react';
import ReactDOM from 'react-dom';

const tracks = [
  {
    title: 'Paint it Black '
  },
  {
    title: 'Sweetwater'
  }
];

ReactDOM.render(
  <div>
    {
      tracks.map((track, key) => {
        return <div key={key} className="track">{track.title}</div>;
      })
    }
  </div>,
  document.getElementById('app')
);

module.hot.accept();
