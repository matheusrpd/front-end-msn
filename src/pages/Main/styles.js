import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    padding: 10px;
    background-color: #3d5af1;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

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
  }
`;

export const Messages = styled.section`
  flex: 1;
`;

export const Message = styled.div`
  width: 30vw;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 11px 0px rgba(181,195,204,1);
  -webkit-box-shadow: 0px 3px 11px 0px rgba(181,195,204,1);
  -moz-box-shadow: 0px 3px 11px 0px rgba(181,195,204,1);

  strong {
    color: #222;
  }

  .date {
    font-size: 14px;
  }
`;
