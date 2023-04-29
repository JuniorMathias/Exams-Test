
import styled from 'styled-components';

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
  display: flex;
`;

export const LabelAvatar = styled.label`
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    margin-bottom: 0.5em;
    font-size: 1.4em;
    font-weight: bold;
    display: flex;
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
export const FormInput = styled.input`
    margin-bottom: 1em;
    padding: .7em;
    border:0;
    border-radius: 5px;
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
    padding: 8px 40px 8px 40px;
    background-color: #121212;
    color: #fff;
    border-radius: 5px;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 32%;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: #fff;
  width: auto;
  background-color: red;
  font-weight: bold;
  margin-bottom: 0.3%;
`;


