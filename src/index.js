import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

axios.default.baseURL = "http://localhost:3000/events"

ReactDOM.render(<App />, document.getElementById('root'))


serviceWorker.unregister();
