import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDUBqWx8gZVEML2NZVl3zumx9X1K8dCzc",
  authDomain: "netshop-c71bf.firebaseapp.com",
  projectId: "netshop-c71bf",
  storageBucket: "netshop-c71bf.appspot.com",
  messagingSenderId: "153643937958",
  appId: "1:153643937958:web:7527648524ababa05f8467"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
