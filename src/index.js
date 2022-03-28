import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Avatar from './components/Avatar/Avatar';
import reportWebVitals from './reportWebVitals';
import Lista from './components/Lista';
import './App.css';
import Form from './components/Form/Form';
import NewComponent from './components/ModalWelcome/ModalWelcome';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <div className="avatars-container d-flex gap-3 justify-content-center align-items-start flex-wrap">
      <Avatar id= {1} name= "Alan"/>
      <Avatar id= {6} name= "Emiliano"/>
      <Avatar id= {7} name= "Vaquita"/>
      <Avatar id={8} name="Suazo"/>
    </div>
    <Lista/>
    <Form />
    <NewComponent name="Alan" id={1}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();