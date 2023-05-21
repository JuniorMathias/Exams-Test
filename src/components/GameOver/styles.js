import styled from 'styled-components';
import { Link as Router } from 'react-router-dom';

export const GameOver = styled.div`
    text-align: center;
    max-width: 500px;
    display: flex;
    flex-direction: column;
`;

export const H2 = styled.h2`
    margin-bottom: 1rem;
`;

export const Para = styled.span`
    color: #fff;
    margin-bottom: 1rem;
`;
export const Button = styled.button`
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
    color: #fff;
    background: linear-gradient(
        90deg,
        rgba(45, 211,111, 1) 0%,
        rgba(300, 211, 111, 1) 100%
    );
    border-radius: 2rem;
    border: 2px solid #fff;
    margin-bottom: 1rem;
    &:hover {
        background-color: rgba(219, 38, 41, 1);
}
`;

export const Link = styled(Router)`
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(
        90deg,
        rgba(45, 211,111, 1) 0%,
        rgba(300, 211, 111, 1) 100%
    );
    border-radius: 2rem;
    border: 2px solid #fff;
    margin-bottom: 1rem;
    &:hover {
        background-color: rgba(219, 38, 41, 1);
    }
`;
