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
  box-shadow: 0 1px 2px #0003;
  background-image: linear-gradient(to right, #2dd36f , #121212);
  max-width: 750px;
  padding: 0px 30px;
  border-radius: 5px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    object-fit: cover;
    
`;
export const Row = styled.div`
`;

export const LabelAvatar = styled.label`
    width: 380px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export const FormInputFile = styled.input`
    display: none;
`;
export const AvatarImage = styled.div`
    border-radius: 50%;
    margin:auto;
    -webkit-filter: drop-shadow(2px 3px 6px #fff);
    filter: drop-shadow(2px 3px 6px #fff);
    object-fit: cover;
`;
export const Label = styled.label`
    font-size: 1.4em;
    font-weight: bold;
    color: #fff;
`;

export const Span = styled.span`
    z-index: 99;
    position: absolute;
    opacity: 0.7;
    transition: all 0.5s;
    &:hover {
        opacity: 1;
        transform: scale(1.4);
    }
`;

export const Input = styled.input`
  border: 0;
  width: 100%;
  margin-bottom: 12px;
  height: 36px;
  border-radius: 4px;
  padding: 0 8px;
`;
export const Button = styled.button`
  height: 36px;
  border: 0;
  border-radius: 4px;
  background-color: #3366ff;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  width: 50%;
`;
export const Link = styled(Router)`
  color: #fff;
  text-decoration: none;
  margin: 14px 0;
  font-size: 14px;
  font-weight: bold;
`;



