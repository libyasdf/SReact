/**
 * 路由
 */

import React from 'react';
import {
    BrowserRouter as Router, MemoryRouter, Route, Switch, Redirect
  } from 'react-router-dom';
import '../src/Util/Util';
import 'antd/dist/antd.min.css';
import qs from 'qs';
// 代码分割
import loadable from '../src/Util/loadable';
// const Home = loadable(() => import('DeductionTable/DeductionTable'));
// const Test = loadable(() => import('DeductionTable/Test'));
const Home = loadable(() => import('./routes/DeductionTable/DeductionTable'));
const Test = loadable(() => import('./routes/DeductionTable/Test'));
const str = "?url=/sec-react-tj/home";
// const str = window.location.search;
const params = qs.parse(str, { ignoreQueryPrefix: true });
const initUrl = params.url;
// import {Button} from "antd";

// function App() {
//     return (
//         <div className="App">
//             <Button type={'primary'}>hh</Button>
//         </div>
//     );
// }

const list = [{
    path: initUrl ? "/sec-react-tj/home" : "/", // MemoryRouter 或者为本地运行的 BrowserRouter
    component: Home,
    exact: true
  }, {
    path: "/sec-react-tj/somepage/:parameter",
    title: "测试集成",
    component: Test,
    exact: true
  }
  ];

const getRoutes = () => {
    return (
      <Switch>
        {
          list.map((item, key) => {
            return (
              <Route exact={item.exact} path={item.path} component={item.component} key={key}/>
            );
          })
        }
        <Redirect from='/*' to='/'/>
      </Switch>
    );
  };
// borwerRouter
var BasicRoute = () => (
    <Router basename="/sec-react-tj">
      {getRoutes()}
    </Router>
  );
  // MemoryRouter
  if (initUrl) {
    BasicRoute = () => (
      <MemoryRouter initialEntries={[initUrl]} initialIndex={0}>
        {getRoutes()}
      </MemoryRouter>
    );
  }

export default BasicRoute;
