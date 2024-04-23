import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyByUUPWt1gahC10XP4NkSov4RJ7wRE0xHM",
  authDomain: "cart-de755.firebaseapp.com",
  projectId: "cart-de755",
  storageBucket: "cart-de755.appspot.com",
  messagingSenderId: "101663441607",
  appId: "1:101663441607:web:8a802dcd40710abc0674e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
