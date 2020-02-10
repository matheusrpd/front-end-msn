/* eslint-disable consistent-return */
/* eslint-disable no-console */
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCfY3s8DLesrvEiYpJeChywH7XnDl8WLko',
  authDomain: 'notification-msn.firebaseapp.com',
  databaseURL: 'https://notification-msn.firebaseio.com',
  projectId: 'notification-msn',
  storageBucket: 'notification-msn.appspot.com',
  messagingSenderId: '279549137420',
  appId: '1:279549137420:web:24859825a29a110000d429',
  measurementId: 'G-SL2BP7EZ30',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log(payload);
});

export const askForPermissioToReceiveNotifications = async () => {
  try {
    await messaging.requestPermission();
    const token = await messaging.getToken();
    return token;
  } catch (err) {
    console.error(err);
  }
};
