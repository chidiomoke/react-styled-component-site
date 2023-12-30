import styled from "styled-components";
import { TopTextStyleH3, TopTextStyleP, TopTextWrap, Container } from "../../Globalstyles";

export const HeroTwoContainer = styled.div`
    width: 100%;
    padding: 50px 0px;
    @media screen and (max-width: 960px){
        padding: 20px 0px;
    }
   
    
`
export const ContainerHeroTwo = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

export const HeroTwoTopWrap = styled(TopTextWrap)`
     
`
export const HeroTwoH3 = styled(TopTextStyleH3)`
    
`
export const HeroTwoP = styled(TopTextStyleP)`
  
`

export const HeroTwoImagewrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`
export const HeroTwoImage = styled.img`
    width: 100%;
`
export const HeroTwoInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const HeroTwoInnerText = styled.p`
    font-size: 24px;
`
export const HeroTwoInnerSmall = styled.p`
    font-size: 14px;
`



