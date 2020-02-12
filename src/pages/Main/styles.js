import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
	align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    select {
      width: 50%; 
    }

    textarea {
      height: 400px;
      margin: 5% 0;
      border-radius: 5px;
      padding: 20px;
      font-size: 18px;
      border: 1px solid #b5c3cc;
      color: #3d5af1;
    }

    button {
      padding: 10px;
      background-color: #3d5af1;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
