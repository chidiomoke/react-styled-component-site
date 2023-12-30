import styled from "styled-components";
import { Container } from "../../Globalstyles";


export const FooterContainer = styled.div`
    
    background: #000000;
    

   

`
export const ContainerFooter = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
    gap: 88px;
    

   

`
export const FooterLinksWrapper = styled.div`
    display: flex;
    gap: 40px;
    @media screen and (max-width: 768px){
        flex-flow: wrap;
    
     
    }

`
export const FooterLinkInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 396px;
    height: 56px;
    gap: 8px;

`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 177px;
    height: 84px;
    gap: 16px;

    @media screen and (max-width: 768px){
    padding: 10px;
    width: 40%;
    
     
    }
`

export const FooterLinkLogo = styled.div`
    color: #fff;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
`
export const Footerlinks = styled.p`
    color: #787878;
    font-size: 14px;
`

export const FooterLinksTitle = styled.h3`
    color: #fff;
`
export const FooterSocialLinks = styled.div`
    display: flex;
    gap: 40px;
`
export const SocialLinks = styled.img`
    width: 40px;
    height: 40px;
`
export const WebsiteInfo = styled.div`
    color: #787878;
    font-size: 14px;

`
export const FooterSocialWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
`

export const FooterLine = styled.hr`
    border: solid #303030 1px;

`
export const FooterLinksWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

`


