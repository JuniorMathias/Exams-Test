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
  justify-content: center;
  width: 100%;
  max-width: 750px;
  padding: 0px 30px;
  border-radius: 5px;
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
export const ButtonScore = styled.button`
   position: absolute;
   bottom: 60%;
   left: 40%;
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
export const Table = styled.table`
    border:1px solid #CCC;
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
  border: 1px solid #ddd;
  padding: .35em;
`;

export const Tbody = styled.tbody`
  color: #009b89 !important;
  text-align: center !important;
  font-weight: bold !important;
`;

export const Td = styled.td`
  background-color: #f8f8f8;
  color: #474a51 !important;
  border: 1px solid #ddd;
  padding: 1em;
`;