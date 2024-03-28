import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import FunVsClass from './components/FuncVsClass/FunVsClass'
import PropsAndDefaultProps from './components/PropsAndDefaultProps.jsx'
import User from './components/User';
import Login from './components/Login';
import Function from './components/FuncVsClass/Function/Function.jsx';
import Class from './components/FuncVsClass/Class/Class.jsx';
import Events from './components/Events.jsx';
import HigherOrderComponent from './components/HigherOrderComponent/HOC.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='funVsClass' element={<FunVsClass />} >
        <Route path='function' element={<Function />} />
        <Route path='class' element={<Class />} />
      </Route>
      <Route path='props&DefaultProps' element={<PropsAndDefaultProps received="Received Props" />} />
      <Route path='events' element={<Events />} />
      <Route path='higherOrderComponent' element={<HigherOrderComponent />} />
      <Route path='login' element={<Login />} />
      <Route path='user/:username' element={<User />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
