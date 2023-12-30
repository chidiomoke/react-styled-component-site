import styled from "styled-components";
import { Container } from "../../Globalstyles";


export const CarouselWrapper = styled.div`
    width: 100%;
    padding: 50px 0px;
    
    @media screen and (max-width: 960px){
        padding: 20px 0px;
    }
     
    
`
export const ContainerCarousel = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

export const CarouselTitleFrame = styled.div`
    width: 515px;
    text-align: center; 
    
`
export const CarouselTitle = styled.h3`
    font-size: 32px;
    text-transform: uppercase;
   
    
    
`
export const CarouselPara = styled.p`
    font-size: 14px;
    font-weight: 400;
   
    
`

export const CarouselImageAllContainer = styled.div`
    display: flex;
    gap: 40px;
    /* width: 1264px; */
    width: 100%;

    @media screen and (max-width: 648px){
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
`
export const CarouselImage = styled.img`
    width: 100%;
    
    
`

export const CarouselImageContainer = styled.div`
     width: 100%;
     position: relative;

   
`

export const CarouselImageText = styled.p`
    padding: 10px 0px;
    

`
export const CarouselHr = styled.hr`
    width: 9%;
    
`
export const CarouselArrow = styled.div`
    font-size: 80px;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 1px red; */
    background-color: #fff;
    cursor: pointer;

    @media screen and (max-width: 960px){
    width: 40px;
    height: 40px;

}   

    
`

export const CarouselArrows = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    /* bottom: 115px;
    left: 70px; */
    bottom: 15%;
    left:10%;
    transform: rotate(180deg);
    gap: 20px;

    @media screen and (max-width: 960px){
    position: absolute;
    bottom: 20%;
    left:10%;
    

}   
    
   
`
