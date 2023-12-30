import styled from "styled-components";
import { Container, TopTextStyleH3, TopTextStyleP, TopTextWrap } from "../../Globalstyles";

export const HeroThreeContainer = styled.div`
    padding: 50px 0px;
  
    @media screen and (max-width: 960px){
        padding: 20px 0px;
    }
   

`

export const ContainerHeroThree = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    
`

export const HeroThreeTopWrap = styled(TopTextWrap)`
      
`
export const HeroThreeH3 = styled(TopTextStyleH3)`

`
export const HeroThreeP = styled(TopTextStyleP)`
    
`
export const HeroThreeSymbolsWrap = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   gap: 40px;
   @media (max-width: 768px){
     overflow: scroll;
     gap: 100px;
    }

   
    
`
export const HeroThreeSymbolCover = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 177px;
    height: 177px;
    
`

export const HeroThreeSymbol = styled.img`
    width: 60px;
    height: 60px;
    opacity: 50%;
`


