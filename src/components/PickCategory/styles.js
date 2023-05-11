import styled from 'styled-components';
import { Link as Router } from 'react-router-dom';

export const Category  = styled.div`
    border-radius: 1rem;
    
`;


export const Form = styled.form`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 8px;
  color: #fff;
`;


export const P = styled.p`
    margin-bottom: 1rem;
`;

export const H2 = styled.h2`
    margin-bottom: 2rem;
`;
export const OptionsContainer = styled.div`
    
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


