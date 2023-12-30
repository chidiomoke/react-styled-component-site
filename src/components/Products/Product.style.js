import styled from "styled-components";
import { Container } from "../../Globalstyles";

export const ProductContainer = styled.div`
    /* width: 100%; */
    padding: 50px 0px;
    @media screen and (max-width: 960px){
        padding: 20px 0px;
    }
   
`
export const ContainerProduct = styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const ProductH3 = styled.h3`
    font-size: 32px;
    text-transform: uppercase;
    
    
`
export const ProductP = styled.p`
    font-size: 14px;
    font-weight: 400; 
    
`
export const ProductTitleWrapper = styled.div`
     max-width: 515px;
    text-align: left;
   


    
`
export const ProductTopWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    
    
    @media screen and (max-width: 768px){
        display: flex;
    width: 100%;
    flex: 50%;

    }
    
    
`
export const ProductArrowWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ProductArrows = styled.div`
    font-size: 30px;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 30%;
    transform: rotate(180deg);
    cursor: pointer;
        
    :hover{
        background-color: #d9d9d9;
    }
`
export const ProductImageWrap = styled.div`
    display: flex;
    gap:16px;
`
export const ProductImage = styled.img`
    width: 100%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
    
`
export const ProductRealCover = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px){
       display: none;
    }
    
`
export const AestheticOffice = styled.h3`
    text-transform: uppercase;
    font-size: 24px;
`
export const AestheticOfficeWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 177px;
    height: 104px;
    gap: 8px;
    
`
export const AestheticText = styled.p`
    color: #575757;
    font-size: 14px;

`
export const ProductRealHr = styled.hr`
    transform: rotate(90deg);
    width: 150%;
    @media screen and (max-width: 1359px){
        width: 120%;
    } 
    @media screen and (max-width: 960px){
        width: 70%;
    } 
    @media screen and (max-width: 768px){
        width: 40%;
    } 
    
    
`
export const ConferenceRoom = styled.h4`

`
export const ConferenceRoomText = styled.p`

`
export const ProductConferenceWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap:4px;
    
`

export const ProductImageWrapper = styled.div`
    max-width: 100%;
`