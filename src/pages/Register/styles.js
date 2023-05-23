import styled from 'styled-components';
import { Link as Router } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // aqui tem que mudar para colocar lado a lado
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-image: linear-gradient(to right, #3380d6 , #121212);
  max-width: 750px;
  padding: 0px 30px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 8px;
  color: #fff;
  display: flex;
  justify-content: center;
`;
export const Span = styled.span`
  margin-bottom: 28px;
  color: #fff;
`;

export const LoginArea = styled.div`
    display: flex;
    justify-content: center;
    background-color: #181c2e;
    width: 108%;
`;

export const MyIcon = styled.img`
    padding: 20px;
    max-width: 750px;
    height: 130px;
`;
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
`;
export const Input = styled.input`
  border: 0;
  width: 100%;
  margin-bottom: 12px;
  height: 36px;
  border-radius: 4px;
  padding: 0 8px;
`;
export const Label = styled.label`
    margin-bottom: 0.5em;
    color: #fff;
    font-weight: bold;
`;

export const Button = styled.button`
  height: 36px;
  border: 0;
  border-radius: 4px;
  background-color: #3366ff;
  color: #fff;
  font-size: 18px;
`;

export const Link = styled(Router)`
  color: #fff;
  text-decoration: none;
  margin: 14px 0;
  font-size: 14px;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: #fff;
  width: auto;
  background-color: red;
  font-weight: bold;
  margin-bottom: 0.3%;
`;