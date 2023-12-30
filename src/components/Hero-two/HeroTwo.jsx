import React from 'react'
import {
    HeroTwoContainer,
    HeroTwoTopWrap,
    HeroTwoH3,
    HeroTwoP,
    HeroTwoImage,
    HeroTwoImagewrap,
    HeroTwoInner,
    HeroTwoInnerText,
    HeroTwoInnerSmall,
    ContainerHeroTwo

} from './HeroTwo.style'
import Herotwofirst from '../../assets/Herotwoimg.png';
// import { Container } from '../../Globalstyles'

const HeroTwo = () => {
    return (
        <>
            <HeroTwoContainer>
                <ContainerHeroTwo>
                    <HeroTwoTopWrap>
                        <HeroTwoH3>
                            Case studies
                        </HeroTwoH3>
                        <HeroTwoP>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusamus, harum quaerat animi adipisci laboriosam suscipit?
                        </HeroTwoP>
                    </HeroTwoTopWrap>
                    <HeroTwoImagewrap>
                        <HeroTwoImage src={Herotwofirst} />
                        <HeroTwoInner>
                            <HeroTwoInnerText>Lounge Re-Design</HeroTwoInnerText>
                            <HeroTwoInnerSmall>Learn More</HeroTwoInnerSmall>
                        </HeroTwoInner>
                    </HeroTwoImagewrap>
                </ContainerHeroTwo>
            </HeroTwoContainer>
        </>
    )
}

export default HeroTwo
