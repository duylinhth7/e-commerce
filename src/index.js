import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import allReducres from './reducers';
import { createStore } from "redux";
import { Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(allReducres);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);

