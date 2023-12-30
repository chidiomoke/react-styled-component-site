import styled from "styled-components";
import { Button, Row } from "../../Globalstyles";


export const HeroContainer = styled.div`
    position: relative;
    
    margin-top: 120px; 
    @media screen and (max-width: 960px){
        padding: 20px 0px;
        
    }
    @media screen and (max-width: 768px){
        margin-top: 40px;
        
    }
      
`

export const HeroWrapper = styled(Row)`
   max-width: 1440px;
    margin: auto;
    width: 85%;
      
`

export const HeroContent = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 20px;
      
`
export const HeroText = styled.h2`
    font-weight: 700;
    line-height: 50.4px;
    font-size: 40px;
    margin-top: 15%;
`

export const HeroParagraph = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 17.64px;
    padding-bottom: 20px;
    color:#575757;
`

export const HeroButton = styled(Button)`
    width: 149px;
    padding: 10px 20px;
    
`

export const Heroimg = styled.img`
    max-width: 100%;
   
   
`
export const HeroStarImg = styled.img`
    height: 120px;
    width: 120px;
   
`

export const HeroImageWrap = styled.div`
     
     @media (max-width: 768px){
     transform: rotate(-5deg);
    }
`

export const HeroScrollText = styled.h1`
    font-size: 140px;
    position: absolute;
    /* top: 334px; */
    left:40px;
    bottom: 20%;
    -webkit-text-stroke: 1px;
    -webkit-text-fill-color: transparent;
    font-family: 'roboto';
    

    @media screen and (max-width: 1267px){
    position: absolute;
    left:40px;
    bottom: 20%;
    } 
    @media screen and (max-width: 768px){
        overflow: hidden;
    } 
    
    
`