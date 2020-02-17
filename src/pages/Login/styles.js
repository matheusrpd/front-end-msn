import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const Title = styled.h1`
  color: #0e153a;
  margin-bottom: 12px;
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 24px;
  color: #b5c3cc;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

`;

export const Input = styled.input`
  height: 45px;
  background: transparent;
  border: 2px solid #b5c3cc;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 0 15px;
  color: #b5c3cc;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #b5c3cc;
  }
  :-ms-input-placeholder {
     color: #b5c3cc;
  }
`;

export const Link = styled.strong`
  font-size: 14px;
  font-weight: bold;
  color: #0e153a;
  align-self: flex-end;
  cursor: pointer;
`;

export const Button = styled.button`
  height: 40px;
  border: 0;
  border-radius: 5px;
  background-color: #3d5af1;
  color: #fff;
  letter-spacing: 1px;
  margin-top: 16px;
  margin-bottom: 24px;
  cursor: pointer;
`;
