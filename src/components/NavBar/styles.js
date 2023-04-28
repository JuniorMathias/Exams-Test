import styled from 'styled-components';
import { Link as Router } from 'react-router-dom';
import cover from '../../assets/cover.png';

export const SideBar = styled.div`
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #181C2e;
    position: fixed;
    height: 100%;
    overflow: auto;
    @media screen and (max-width: 1000px){
        width: 150px;
    }
    @media screen and (max-width: 750px){
        width: 100%;
        height: auto;
        position: relative;
    }
`;
export const CoverAvatar = styled.div`
    background: url(${cover});
    background-color: #c3c3c3;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    padding-top: 30px;
    @media screen and (max-width: 750px){
        // display: none;
        margin-left: 0;
    }
`;
export const Avatar = styled.img`
    border-radius: 50%;
    display: block;
    margin:auto;
    width: 90px;
    height: 90px;
    -webkit-filter: drop-shadow(2px 3px 6px #121212);
    filter: drop-shadow(2px 3px 6px #121212);
    object-fit: cover;
`;

export const Link = styled(Router)`
    display: block;
    color: rgba(255,255,255, 0.7);
    padding: 16px;
    margin: 0;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: ease-in-out .4s;
    &:hover {
        background-color: #121212;
        color: #fff;
    }
    svg{
        margin-right: .7em;
      }
    @media screen and (max-width: 700px){
        float: left;
    }
    @media screen and (max-width: 400px){
        text-align: center;
        float: none;
        svg{
            diplay: none;
          }
    }
`;
