import { Nav, NavLogo, NavMenu, NavSignin, NavItem, NavGrp, NavBtnSignup, MobileIcon, NavLinks, NavLogoWrap, NavDot, ContainerNav } from "./Nav.style";
import { FaBars } from "react-icons/fa";
import dot from '../../assets/Ellipse1.png';


const Navbar = ({ toggle }) => {
    return (


        <Nav>
            <ContainerNav>
                <NavLogoWrap to='/'>
                    <NavLogo>HOMME</NavLogo>
                    <NavDot src={dot} />
                </NavLogoWrap>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='designs'>Design</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='interiors'>Interiors</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='CaseStudies'>Case Studies</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Clients'>Clients</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavGrp>
                    <NavSignin to='signin'>Sign in</NavSignin>
                    <NavBtnSignup to='signup'>Sign Up</NavBtnSignup>
                </NavGrp>
            </ContainerNav>
        </Nav>






    )
}



export default Navbar;