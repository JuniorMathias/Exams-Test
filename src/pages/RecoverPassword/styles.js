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
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-image: linear-gradient(to right, #2dd36f , #121212);
  opacity: 0.3px;
  max-width: 750px;
  padding: 0px 0px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 8px;
  color: #fff;
`;
export const Span = styled.span`
  margin-bottom: 28px;
  color: #fff;
`;

export const LoginArea = styled.div`
    display: flex;
    justify-content: center;
    background-color: #181c2e;
    width: 100%;
`;
export const Row = styled.div`
  display: flex;
`;
export const MyIcon = styled.img`
    padding: 20px;
    width: 170px;
    height: 130px;
`;
export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 0;
  margin-bottom: 12px;
  height: 36px;
  width: 100%;
  border-radius: 4px;
  padding: 0 8px;
  background-color: #e6e6e6;
  box-sizing:border-box;
  padding-left: 2rem;
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
export const Label = styled.label`
    margin-bottom: 0.5em;
    color: #fff;
    font-weight: bold;
`;
export const LinkPassword = styled(Router)`
  color: #fff;
  text-decoration: none;
  margin: 14px 0;
  font-size: 14px;
  justify-content: end;
  display: flex;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: #fff;
  width: auto;
  background-color: red;
  font-weight: bold;
  margin-bottom: 0.3%;
`;