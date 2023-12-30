import styled from "styled-components";
import { Button, Container } from "../../Globalstyles";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';



export const Nav = styled.nav`
    
    padding: 27px 0px;
    
    
`

export const ContainerNav = styled(Container)`
    /* padding: 0px 88px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavLogoWrap = styled(LinkR)`
       cursor: pointer;
       text-decoration: none;
       display: flex;
       align-items: center;
       position: relative;
       
    `
export const NavLogo = styled.h2`
    font-size: 24px;
    font-weight: 700;
    
    color: #000;
    `
export const NavDot = styled.img`
           width: 8px;
           height: 8px;
           position: absolute;
           top: 15px;
           left:105px;
        
        `

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        /* transform: translate(0%, 0%); */
        font-size: 30px;
        cursor: pointer;
            
    }
    `
export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        gap:30px;
        list-style-type: none; 
        
        @media screen and (max-width: 768px) {
        display: none;
    }
    `

export const NavItem = styled.li`
   height: 20px;  

`
export const NavLinks = styled(LinkScroll)`
    font-weight: 400;
    font-size: 16px;
    color: #000;
    text-decoration: none;
         
`

export const NavSignin = styled(LinkR)`
    font-size: 14px;
    font-weight: 600;
    color: #000;
    white-space: nowrap;
    text-decoration: none;
`
export const NavBtnSignup = styled(Button)`
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`

export const NavGrp = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (max-width:768px){
       display: none; 
    }
`

