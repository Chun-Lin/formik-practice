import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormikApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FormikApp />, document.getElementById('root'));
registerServiceWorker();
