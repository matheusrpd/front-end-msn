import api from '../services/api';

const loadOptions = async () => {
  const opt = [];
  const response = await api.get('/users');
  const users = response.data;

  users.forEach((user) => {
    const objUser = {
      id: user.id,
      title: user.name,
    };
    opt.push(objUser);
  });

  return opt;
};

export default loadOptions;
