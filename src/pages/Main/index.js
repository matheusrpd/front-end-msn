/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { askForPermissioToReceiveNotifications } from '../../pushNotification';
import api from '../../services/api';

const Main = () => {
  useEffect(() => {
    const askNotification = async () => {
      const token_notification = await askForPermissioToReceiveNotifications();
      const token = localStorage.getItem('user');

      const reqConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        await api.put('/users', { token_notification }, reqConfig);
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
