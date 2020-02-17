/* eslint-disable react/prop-types */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Form, Select, Input } from '@rocketseat/unform';

import { parseISO, format } from 'date-fns';
import askNotification from '../../utils/askNotification';
import loadOptions from '../../utils/loadOptionsSelect';
import api from '../../services/api';

import Modal from '../../components/Modal';

import { Container, Messages, Message } from './styles';

const Main = () => {
  const [options, setOptions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [messages, setMessages] = useState([]);
  const [show, setShow] = useState();

  useEffect(() => {
    const loadFunctions = async () => {
      askNotification();
      const opts = await loadOptions();
      setOptions(opts);
    };
    loadFunctions();
  }, []);

  useEffect(() => {
    const loadMessages = async () => {
      const response = await api.get('/messages');
      setMessages(response.data);
    };
    loadMessages();
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

  const formatDate = (date) => {
    const parsedDate = parseISO(date);
    const formatedDate = format(parsedDate,
      "dd'/'MM'/'yyyy");
    return formatedDate;
  };

  const formatText = (text) => {
    const subText = text.substr(0, 25);
    const formatedText = `${subText}...`;
    return formatedText;
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <Container>
      <Messages>
        { messages.map((message) => (
          <Message key={message.id}>
            <div>
              <p>{formatText(message.text)}</p>
              <strong>{message.sender.name}</strong>
            </div>
            <p className="date">{formatDate(message.date)}</p>
          </Message>
        ))}
      </Messages>
      <>
        <Modal show={show} handleClose={hideModal}>
          <Form onSubmit={handleSubmit}>
            <Select options={options} name="user" />
            <Input name="message" multiline />
            <button type="submit" className="btn">Enviar</button>
          </Form>
        </Modal>
        <button type="button" onClick={showModal} className="btn">Enviar mensagem</button>
      </>
    </Container>
  );
};

export default Main;
