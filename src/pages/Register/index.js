/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Container,
  CardContent,
  CardIllustration,
  Title, SubTitle,
  Form,
  Input,
  Button,
} from './styles';
import api from '../../services/api';

const Login = ({ history }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert('Suas senhas não estão iguais.');
      return;
    }

    await api.post('/users', {
      name, email, password,
    });

    history.push('/');
  };

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      setConfirmPassword(event.target.value);
    }
  };

  return (
    <Container>
      <CardContent>
        <Title>Cadastro</Title>
        <SubTitle>Informe seus dados</SubTitle>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleChange}
            value={name || ''}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email || ''}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleChange}
            value={password || ''}
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            onChange={handleChange}
            value={confirmPassword || ''}
            required
          />
          <Button>Cadastrar-se</Button>
        </Form>
      </CardContent>
      <CardIllustration>
        <img src="" alt="" />
      </CardIllustration>
    </Container>
  );
};

export default Login;
