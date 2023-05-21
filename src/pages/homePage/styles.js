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
  height: 30%;
  max-width: 750px;
  padding: 0px 30px;
  border-radius: 5px;
`;

export const Table = styled.table`
    margin-top: 1em;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    @media screen and (max-width: 1000px){
      margin-top: 1em;
      margin-bottom: 1em;
  }
`;
export const Th = styled.th`
  padding: .62em;
  text-align: center;
  font-weight: bold !important;
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  background-color: #f8f8f8;
  color: #009b89 !important;
  padding: .35em;
`;

export const Tbody = styled.tbody`
  color: #009b89 !important;
  text-align: center !important;
  font-weight: bold !important;
  
`;

export const Td = styled.td`
  background-color: #f8f8f8;
  color: #121212 !important;
  text-transform: uppercase;
  padding: 1em;
`;

// if the db is blank 
export const Main = styled.main`

`;

export const ContainerBlank = styled.div`
  background-image: linear-gradient(to right, #2dd36f , #121212);
  display: flex;
  justify-content: center;
  width: 60%;
  border-radius: 10px;
`;

export const Box1 = styled.div`
  width: 5%;
  display: inline-block;
  font-size: 2vw;
  text-align: center;
  padding: 5vw 0vw 5vw 0vw;
  min-width:50%;
  border-radius: 10px;
  border-right: #fff 1px solid;
  margin-right: 1%;
`;

export const H2 = styled.h2`
  color: aliceblue;
`;
export const PRedes = styled.span`
  margin-top: 15%;
`;
export const Para = styled.p`
  color: #fff;
  font-size: medium;
`;

export const Link = styled(Router)`
  color: #121212;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  text-decoration: none !important;
  background: linear-gradient(
      90deg,
      rgba(45, 211,111, 1) 0%,
      rgba(300, 211, 111, 1) 100%
  );
  border-radius: 2rem;
  border: 2px solid #fff;
`;
