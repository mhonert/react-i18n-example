import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import App from './App';
import { initialize } from './i18n';

initialize();

ReactDOM.render(<App />, document.getElementById('root'));
