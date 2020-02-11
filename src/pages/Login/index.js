/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint no-unused-expressions: [2, { allowTernary: true }] */
import React, { useState } from 'react';
import {
  Container, CardContent, CardIllustration, Title, SubTitle, Form, Input, Button, Link,
} from './styles';
import api from '../../services/api';
import { login } from '../../services/auth';

const Login = ({ history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.post('/sessions', { email, password });

    const { token } = response.data;

    login(token);

    history.push('/', { token });
  };

  const handleChange = (event) => {
    (event.target.name === 'email') ? setEmail(event.target.value) : setPassword(event.target.value);
  };

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <Container>
      <CardContent>
        <Title>Login</Title>
        <SubTitle>Coloque seus dados</SubTitle>

        <Form onSubmit={handleSubmit}>
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
          <Link>Esqueci minha senha</Link>
          <Button>Entrar</Button>
        </Form>

        <p>Ainda não possui cadastro? <Link onClick={handleRegister}>Clique aqui</Link></p>
      </CardContent>
      <CardIllustration>
        <img src="" alt="" />
      </CardIllustration>
    </Container>
  );
};

export default Login;
