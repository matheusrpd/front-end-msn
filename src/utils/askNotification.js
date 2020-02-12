import { askForPermissioToReceiveNotifications } from '../pushNotification';
import api from '../services/api';

const aksNotification = async () => {
  const token_notification = await askForPermissioToReceiveNotifications();

  try {
    await api.put('/users', { token_notification });
  } catch (error) {
    console.error(error);
  }
};

export default aksNotification;
