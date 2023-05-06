import styled from 'styled-components';

export const Welcome = styled.div`
    text-align: center;
    max-width: 500px;
`;
export const H2 = styled.h2`
    margin-bottom: 1rem;
    color: #fff;
`;
export const P = styled.p`
    margin-bottom: 1rem;
    color: #fff;
`;

export const H1 = styled.h1`
 
`;

export const Button = styled.button`
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(
        90deg,
        rgba(45, 211,111, 1) 0%,
        rgba(300, 211, 111, 1) 100%
    );
    border-radius: 2rem;
    border: none;
    
    &:hover {
        background-color: rgba(219, 38, 41, 1);
        color: #fff;
    }
`;
