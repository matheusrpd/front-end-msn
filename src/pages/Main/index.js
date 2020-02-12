/* eslint-disable react/prop-types */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Form, Select, Input } from '@rocketseat/unform';
import { askForPermissioToReceiveNotifications } from '../../pushNotification';
import api from '../../services/api';
import Modal from '../../components/Modal';

import { Container } from './styles';

const Main = () => {
  const [options, setOptions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [show, setShow] = useState();

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

  useEffect(() => {
    const loadMessages = async () => {
      const response = await api.get('/messages');
      setMessages(response.data);
    };
    loadMessages();
  }, [messages]);

  const handleSubmit = async (data) => {
    const { user: receiver_id, message: text } = data;
    const date = new Date();

    try {
      await api.post('/messages', { text, receiver_id, date });
    } catch (error) {
      console.error(error);
    }
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <Container>
      <Modal show={show} handleClose={hideModal}>
        <Form onSubmit={handleSubmit}>
          <Select options={options} name="user" />
          <Input name="message" multiline />
          <button type="submit">Enviar</button>
        </Form>
      </Modal>
      <button type="button" onClick={showModal}>Open</button>
    </Container>
  );
};

export default Main;
