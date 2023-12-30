import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link as LinkS } from "react-scroll";
// import { Link as LinkR } from "react-router-dom"
import { Button } from "../../Globalstyles";

export const SidebarContainer = styled.aside`
    position: fixed;
    
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 990;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
`;
export const CloseIcon = styled(MdClose)`
    color: #fff;
`;

export const SidebarIcon = styled.div`
    position: absolute;
    top: 27px;
    right: 0;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    padding: 0px 44px;
`;
export const SidebarWrapper = styled.div`
    color: #fff;
`;
export const SidebarLink = styled(LinkS)`
    font-size: 1.5rem;
    list-style-type: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(5, 60px);
    }

`;
export const SideBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    text-align: center;
    align-items: center;

    
`;

export const SidebarSignin = styled.div`
   cursor: pointer; 

   &:hover{
    color: #FFC701;
   }

`;

export const SidebarSignup = styled(Button)`
    cursor: pointer;
    transition: all 0.2s ease-in-out;   

    &:hover{
        transition: all 0.2s ease-in-out; 
        background: #fff;
        color: #010606;
    }
`;
