import styled from 'styled-components';

export const Question  = styled.div`
    border-radius: 1rem;
    padding: 2rem;
    width: 500px;
    
`;

export const Para = styled.p`
    margin-bottom: 1rem;
`;

export const H2 = styled.h2`
    margin-bottom: 2rem;
    color: #fff;
    font-weight: bold;
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


export const ButtonLogout = styled.button`
   position: absolute;
   bottom: 6%;
   left: 4%;
   height: 60px;
   width: 60px;
   border-radius: 30px;
   border: 0;
   font-weight: bold;
   background-color: rgba(219, 38, 41, 0.35);
   color: #fafafa;
   transition: all 0.5s;
   &:hover {
    background-color: rgba(219, 38, 41, 1);
   color: #fff;
  }
`;


