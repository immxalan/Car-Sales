import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers/reducers";
import logger from "redux-logger";

import 'bulma/css/bulma.css';
import './styles.scss';

const store= createStore(reducer, applyMiddleware(logger))

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
