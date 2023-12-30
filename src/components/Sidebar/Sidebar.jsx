import React from 'react'
import {
    SidebarContainer,
    SidebarIcon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarSignin,
    SidebarSignup,
    SideBtnWrap
} from './Sidebar.style'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle} >
                <SidebarIcon onClick={toggle}>
                    <CloseIcon />
                </SidebarIcon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='designs'>Designs</SidebarLink>
                        <SidebarLink to='interiors'>Interiors</SidebarLink>
                        <SidebarLink to='casestudies'>Case studies</SidebarLink>
                        <SidebarLink to='clients'>Clients</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarSignin to='/signin'>Sign In</SidebarSignin>
                        <SidebarSignup to='/signup'>Sign Up</SidebarSignup>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
