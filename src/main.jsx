import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./reset.css"
import './main.css'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDH3VAmYsJH0rqjdd4NtK7swQ_QVmUJFjQ",
  authDomain: "desquiciadosxelpicor.firebaseapp.com",
  projectId: "desquiciadosxelpicor",
  storageBucket: "desquiciadosxelpicor.firebasestorage.app",
  messagingSenderId: "592857977446",
  appId: "1:592857977446:web:a0987c943af9c34df413a7"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
