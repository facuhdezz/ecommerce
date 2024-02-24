import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDUBqWx8gZVEML2NZVl3zumx9X1K8dCzc",
  authDomain: "netshop-c71bf.firebaseapp.com",
  projectId: "netshop-c71bf",
  storageBucket: "netshop-c71bf.appspot.com",
  messagingSenderId: "153643937958",
  appId: "1:153643937958:web:7527648524ababa05f8467"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
