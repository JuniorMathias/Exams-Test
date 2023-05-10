import styled from 'styled-components';

export const Category  = styled.div`
    border-radius: 1rem;
    padding: 2rem;
`;

export const P = styled.p`
    margin-bottom: 1rem;
`;

export const H2 = styled.h2`
    margin-bottom: 2rem;
`;
export const OptionsContainer = styled.div`
    
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
    border: 2px solid #fff;
    
    &:hover {
        background-color: rgba(219, 38, 41, 1);
        color: #fff;
    }
`;


