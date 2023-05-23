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
  justify-content: center;
  width: 100%;
  height: 40%;
  max-width: 750px;
  padding: 0px 30px;
  border-radius: 10px;
  background-image: linear-gradient(to right, #3380d6 , #121212);
`;

export const H2 = styled.h2`
  color: aliceblue;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(Router)`
  color: #fff;
  text-decoration: none;
  margin: 14px 0;
  font-size: 14px;
`;

export const Span = styled.span`
  margin-bottom: 28px;
  color: #fff;
`;



