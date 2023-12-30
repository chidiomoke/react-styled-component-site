import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0px;
             
        
    }

    body{
       
        font-family: 'Sora', sans-serif;
        background-color: #fffcf0; 
    }

    /* h1{
        font-size: 40px;
        text-transform: uppercase;
    }

    p{
        color:#575757;
        font-size: 14px;
        font-weight: 400;
    } */

    
`

export const Container = styled.div`
    max-width: 1440px;
    margin: auto;
    width: 85%;
    /* padding: 50px 88px; */
    position: relative;
    
    


`

export const Button = styled.button`
    width: 97px;
    padding: 10px 20px;
    border-radius: 5px;
    gap: 10px;
    background: #FFC701;
    border: none;
    outline:none;
    white-space: nowrap;
`

export const Row1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    

    
`
export const Row = styled.div`
    display: flex;
    gap: 40px;
    > div{
        flex: 1;
    }
    @media screen and (max-width:768px){
    flex-direction: column;
    gap: 20px;
   } 
`

export const TopTextWrap = styled.div`
    max-width: 515px;
    text-align: center; 
   
`
export const TopTextStyleH3 = styled.h3`
    font-size: 32px;
    text-transform: uppercase;
`
export const TopTextStyleP = styled.p`
    font-size: 14px;
    font-weight: 400;
`
export default GlobalStyle;