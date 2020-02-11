/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { askForPermissioToReceiveNotifications } from '../../pushNotification';
import api from '../../services/api';

const Main = () => {
  useEffect(() => {
    const askNotification = async () => {
      const token_notification = await askForPermissioToReceiveNotifications();

      try {
        await api.put('/users', { token_notification });
      } catch (error) {
        console.error(error);
      }
    };
    askNotification();
  }, []);

  return (
    <div>
      <h1>Main</h1>
    </div>
  );
};

export default Main;
