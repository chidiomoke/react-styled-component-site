import React from 'react'
import {
    HeroThreeContainer,
    HeroThreeTopWrap,
    HeroThreeH3,
    HeroThreeP,
    HeroThreeSymbolsWrap,
    HeroThreeSymbol,
    HeroThreeSymbolCover,
    ContainerHeroThree
} from './HeroThree.styles';

import herothreefirst from '../../assets/Earth.png'
import herothreesecond from '../../assets/Treva.png'
import third from '../../assets/Circle.png'
import fourth from '../../assets/ALab.png'
import fifth from '../../assets/Atica.png'
import sixth from '../../assets/Nira.png'


const HeroThree = () => {
    return (
        <>
            <HeroThreeContainer>
                <ContainerHeroThree>
                    <HeroThreeTopWrap>
                        <HeroThreeH3>
                            Clients
                        </HeroThreeH3>
                        <HeroThreeP>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusamus, harum quaerat animi adipisci laboriosam suscipit?
                        </HeroThreeP>
                    </HeroThreeTopWrap>
                    <HeroThreeSymbolsWrap>
                        <HeroThreeSymbolCover>
                            <HeroThreeSymbol src={herothreefirst} />
                        </HeroThreeSymbolCover>
                        <HeroThreeSymbolCover>
                            <HeroThreeSymbol src={herothreesecond} />
                        </HeroThreeSymbolCover>
                        <HeroThreeSymbolCover>
                            <HeroThreeSymbol src={third} />
                        </HeroThreeSymbolCover>
                        <HeroThreeSymbolCover>
                            <HeroThreeSymbol src={fourth} />
                        </HeroThreeSymbolCover>
                        <HeroThreeSymbolCover>
                            <HeroThreeSymbol src={fifth} />
                        </HeroThreeSymbolCover>
                        <HeroThreeSymbolCover>
                            <HeroThreeSymbol src={sixth} />
                        </HeroThreeSymbolCover>
                    </HeroThreeSymbolsWrap>
                </ContainerHeroThree>
            </HeroThreeContainer>

        </>
    )
}

export default HeroThree
