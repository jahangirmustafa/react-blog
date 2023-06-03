import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuZKlBzA17isAiPuGekwyCGACezWTBB20",
  authDomain: "mearn-test-blog.firebaseapp.com",
  projectId: "mearn-test-blog",
  storageBucket: "mearn-test-blog.appspot.com",
  messagingSenderId: "386490446072",
  appId: "1:386490446072:web:c4c438cdc27e40271a4b0d",
  measurementId: "G-F5342NSKHF"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
