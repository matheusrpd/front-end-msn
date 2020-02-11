/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Form, Select, Input } from '@rocketseat/unform';
import { askForPermissioToReceiveNotifications } from '../../pushNotification';
import api from '../../services/api';

import { Container } from './styles';

const Main = () => {
  const [options, setOptions] = useState([]);

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

  useEffect(() => {
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

      setOptions(opt);
    };
    loadOptions();
  }, []);

  const handleSubmit = async (data) => {
    const { user: receiver_id, message: text } = data;
    const date = new Date();

    try {
      await api.post('/messages', { text, receiver_id, date });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Select options={options} name="user" />
        <Input name="message" multiline />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default Main;
