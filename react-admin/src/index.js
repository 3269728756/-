import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/common.less"
import App from "./router/App"
import {Provider} from "react-redux"
import store from "./redux/store/store"
import  "./utils/init"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <App/>
    </Provider>
  
);


