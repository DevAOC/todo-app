import ReactDOM from 'react-dom';
import React from 'react';
import reportWebVitals from './reportWebVitals';

import App from './App.js';
// import Theme from './context/theme.js';
import Settings from './context/settings.js';

ReactDOM.render(
  <React.StrictMode>
    {/* <Theme> */}
    <Settings>
      <App />
    </Settings>
    {/* </Theme> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
