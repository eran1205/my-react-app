import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/scss/index.scss';
import 'antd/dist/antd.min.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* < store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
