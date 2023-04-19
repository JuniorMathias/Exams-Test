import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 0;
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    padding: 30px 0;
    display: flex;
    justify-content: center;
    max-width: 600px;
    box-shadow: 0 1px 2px;
    width: 80%;
`;
export const Form = styled.form`
`;


export const Row = styled.div`
    display: flex;
    gap: 20px;
    
    @media (max-width: 550px){
        display: block;
    }
`;

export const Input = styled.input`
    padding: 10px;
    width: -webkit-fill-available;
    margin-bottom: 10px;
`;

export const Footer = styled.div`
    text-align: end;
`;
export const Button = styled.button`
    padding: 8px;
    font-size: 20px;
    cursor: pointer;
    background-color: #0081cf;
    color: white;
    border: none !important;
    border-radius: 5px;
`;
