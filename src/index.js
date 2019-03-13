import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './store/reducers'
import 'semantic-ui-css/semantic.min.css';

export const ACTION_CHANGE_START_POINT = 'ACTION_CHANGE_START_POINT';
export const ACTION_CHANGE_FINISH_POINT = 'ACTION_CHANGE_FINISH_POINT';
export const ACTION_PUT_PATH = 'ACTION_PUT_PATH';
export const ACTION_CHANGE_WEATHER = 'ACTION_CHANGE_WEATHER';
export const ACTION_CHANGE_COUNT_SHOW_FOOT_PATH = 'ACTION_CHANGE_COUNT_SHOW_FOOT_PATH';
export const ACTION_CHANGE_COUNT = 'ACTION_CHANGE_COUNT';
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
