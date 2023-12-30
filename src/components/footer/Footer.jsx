import React from 'react';
import {
    FooterContainer,
    FooterLinksWrapper,
    FooterLinkInner,
    FooterLinkLogo,
    Footerlinks,
    FooterLinksTitle,
    FooterSocialLinks,
    SocialLinks,
    WebsiteInfo,
    FooterSocialWrap,
    FooterLine,
    FooterLinksWrap,
    FooterLinkItems,
    ContainerFooter
}
    from './Footer.style';

import Insta from '../../assets/Frame13.png'
import X from '../../assets/Frame14.png'
import Facebook from '../../assets/Frame15.png'
import Youtube from '../../assets/Frame16.png'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <ContainerFooter>
                    <FooterLinksWrapper>
                        <FooterLinkInner>
                            <FooterLinkLogo>Homme.</FooterLinkLogo>
                            <Footerlinks> Beautiful design is welcoming</Footerlinks>
                        </FooterLinkInner>
                        <FooterLinkItems>
                            <FooterLinksTitle> Services</FooterLinksTitle>
                            <FooterLinksWrap>
                                <Footerlinks> Space Redesign</Footerlinks>
                                <Footerlinks> Product Purchase</Footerlinks>
                            </FooterLinksWrap>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinksTitle> Showcase</FooterLinksTitle>
                            <FooterLinksWrap>
                                <Footerlinks> Residential design</Footerlinks>
                                <Footerlinks> Corporate design</Footerlinks>
                            </FooterLinksWrap>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinksTitle> Website</FooterLinksTitle>
                            <FooterLinksWrap>
                                <Footerlinks> Privacy Policy</Footerlinks>
                                <Footerlinks> Terms & Conditions</Footerlinks>
                            </FooterLinksWrap>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinksTitle> Company</FooterLinksTitle>
                            <FooterLinksWrap>
                                <Footerlinks> Contact us</Footerlinks>
                                <Footerlinks> Careers</Footerlinks>
                            </FooterLinksWrap>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLine hr />
                    <FooterSocialWrap>
                        <FooterSocialLinks>
                            <SocialLinks src={Insta} />
                            <SocialLinks src={X} />
                            <SocialLinks src={Facebook} />
                            <SocialLinks src={Youtube} />
                        </FooterSocialLinks>
                        <WebsiteInfo>Copyrights. All rights reserved</WebsiteInfo>
                    </FooterSocialWrap>
                </ContainerFooter>
            </FooterContainer >
        </>
    )
}

export default Footer
