import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App cat={5} txt="overrides default text" />,
  document.getElementById('root')
);
