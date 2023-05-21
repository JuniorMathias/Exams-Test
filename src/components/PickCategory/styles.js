import styled from 'styled-components';
import { Link as Router } from 'react-router-dom';

export const Category  = styled.div`
    border-radius: 1rem;
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


export const Button = styled.button`
    font-weight: bold;
    cursor: pointer;
    background: transparent;
    border-radius: 2rem;
    border: none;
`;
export const ButtonLogout = styled(Router)`
   position: absolute;
   bottom: 6%;
   left: 4%;
   height: 60px;
   width: 60px;
   border-radius: 30px;
   font-weight: bold;
   background-color: rgba(219, 38, 41, 0.35);
   text-decoration: none;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fafafa;
   transition: all 0.5s;
   &:hover {
    background-color: rgba(219, 38, 41, 1);
  }
`;

