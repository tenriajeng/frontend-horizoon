import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyD-pZ5XjyuVNtwC0vEsf7lJYziE1KF9vPw',
    authDomain: 'horizoon-notification.firebaseapp.com',
    projectId: 'horizoon-notification',
    storageBucket: 'horizoon-notification.appspot.com',
    messagingSenderId: '153291068144',
    appId: '1:153291068144:web:cd8afb2c515a2394f3e835',
    measurementId: 'G-X7HJCNQ1DV',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
