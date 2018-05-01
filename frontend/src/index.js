import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import App from './components/App';
import reducers from './reducers'
// import 'semantic-ui-css/semantic.min.css';
import './semantic/dist/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

//Dev purpose only::axios helper
import axios from 'axios';
window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
registerServiceWorker();
