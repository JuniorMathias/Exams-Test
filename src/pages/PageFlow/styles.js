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
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-image: linear-gradient(to right, #3380d6 , #121212);
  opacity: 0.3px;
  max-width: 750px;
  padding: 0px 0px;
  border-radius: 5px;
`;

export const H1 = styled.h1`
 
`;

export const LoginArea = styled.div`
    display: flex;
    justify-content: center;
    background-color: #181c2e;
    width: 100%;
`;
export const MyIcon = styled.img`
    padding: 20px;
    width: 150px;
    height: 130px;
`;
