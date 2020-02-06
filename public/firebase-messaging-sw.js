/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCfY3s8DLesrvEiYpJeChywH7XnDl8WLko",
  authDomain: "notification-msn.firebaseapp.com",
  databaseURL: "https://notification-msn.firebaseio.com",
  projectId: "notification-msn",
  storageBucket: "notification-msn.appspot.com",
  messagingSenderId: "279549137420",
  appId: "1:279549137420:web:24859825a29a110000d429",
  measurementId: "G-SL2BP7EZ30"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
}); 