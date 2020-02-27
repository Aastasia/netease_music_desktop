import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from "./styled.global";
import configureAppStore from "./store";
import App from "./container/app";
import {IconfontStyle} from "./static/iconfont/iconfont";

// 组织代码编写结构
// 文件目录结构 redux结构
const store = configureAppStore();

const Root =() => (<Fragment>
  <Provider store={store}>
    <GlobalStyle />
    <IconfontStyle />
    <App />
  </Provider>
</Fragment>);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your count to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
