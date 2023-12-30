import { HeroButton, HeroWrapper, HeroContainer, HeroParagraph, HeroText, Heroimg, HeroContent, HeroImageWrap, HeroStarImg, HeroScrollText } from "./Hero.style";
import Heroimage from "../../assets/heroimage.png"
import Marquee from "react-fast-marquee";
import star from "../../assets/Star1.png";
// import Row from "../../Globalstyles";
// import { Button } from "react-scroll";



const Hero = () => {
    return (
        <>
            <HeroContainer>
                <HeroWrapper>
                    <HeroContent>
                        <HeroText>
                            DESIGN YOUR DREAM HOME
                        </HeroText>
                        <HeroParagraph>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sit sunt <br /> illo magni aliquid earum? Voluptate.
                        </HeroParagraph>
                        <HeroButton>Explore Gallery</HeroButton>
                    </HeroContent>
                    <HeroImageWrap>
                        <Heroimg src={Heroimage}></Heroimg>
                    </HeroImageWrap>
                </HeroWrapper>
                {/* <Marquee> */}
                <HeroScrollText>MODERN DESIGN
                    <HeroStarImg src={star} />
                </HeroScrollText>
                {/* </Marquee> */}
            </HeroContainer>
        </>
    )
}

export default Hero;

