const firebaseConfig = {
    apiKey: 'AIzaSyD-pZ5XjyuVNtwC0vEsf7lJYziE1KF9vPw',
    authDomain: 'horizoon-notification.firebaseapp.com',
    projectId: 'horizoon-notification',
    storageBucket: 'horizoon-notification.appspot.com',
    messagingSenderId: '153291068144',
    appId: '1:153291068144:web:cd8afb2c515a2394f3e835',
    measurementId: 'G-X7HJCNQ1DV',
};
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload,
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: './logo.png',
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
