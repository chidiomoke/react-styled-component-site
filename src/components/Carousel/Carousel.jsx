import { useState } from "react";
import {
    CarouselWrapper,
    CarouselTitleFrame,
    CarouselTitle,
    CarouselPara,
    CarouselImageAllContainer,
    CarouselImageContainer,
    CarouselImage,
    CarouselImageText,
    CarouselHr,
    CarouselArrow,
    CarouselArrows,
    ContainerCarousel
} from "./Carousel.style"
import first from "../../assets/image1.png"
import second from "../../assets/image2.jpg"
import third from "../../assets/image1.png"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const images = [first, second, third];

const Carousel = () => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const nextImage = () => {
        // setCurrentImgIndex((initialImage) => initialImage + 1);
        setCurrentImgIndex(currentImgIndex === images.length - 1 ? 0 : currentImgIndex + 1)
    }
    const prevImage = () => {
        // setCurrentImgIndex((initialImage) => initialImage - 1);
        setCurrentImgIndex(currentImgIndex === 0 ? images.length - 1 : currentImgIndex - 1)
    }

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const anotherImage = () => {
        // setCurrentImageIndex((currentImage) => currentImage + 1);
        setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)
    }
    const preImage = () => {
        // setCurrentImageIndex((proImage) => proImage - 1);
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)
    }
    return (
        <>
            <CarouselWrapper>
                <ContainerCarousel>
                    <CarouselTitleFrame>
                        <CarouselTitle>
                            Explore Designs
                        </CarouselTitle>
                        <CarouselPara>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repudiandae laborum ea similique. Sint, repellat veritatis.
                        </CarouselPara>
                    </CarouselTitleFrame>
                    <CarouselImageAllContainer>
                        <CarouselImageContainer>
                            <CarouselImage src={images[currentImgIndex]} />
                            <CarouselArrows>
                                {/* {currentImageIndex === images.length - 1 ? 0 : ( */}
                                <CarouselArrow onClick={nextImage}>
                                    <IoIosArrowBack />
                                </CarouselArrow>
                                {/* )} */}

                                {/* {currentImageIndex !== 0 && ( */}
                                <CarouselArrow onClick={prevImage}>
                                    <IoIosArrowForward />
                                </CarouselArrow>
                                {/* )} */}
                            </CarouselArrows>
                            <CarouselImageText> Residential Designs</CarouselImageText>
                            <CarouselHr hr />
                        </CarouselImageContainer>
                        <CarouselImageContainer>
                            <CarouselImage src={images[currentImageIndex]} />
                            <CarouselArrows>
                                <CarouselArrow onClick={anotherImage}>
                                    <IoIosArrowBack />
                                </CarouselArrow>
                                <CarouselArrow onClick={preImage}>
                                    <IoIosArrowForward />
                                </CarouselArrow>
                            </CarouselArrows>
                            <CarouselImageText> Corporate Designs</CarouselImageText>
                            <CarouselHr hr />
                        </CarouselImageContainer>
                    </CarouselImageAllContainer>
                </ContainerCarousel>
            </CarouselWrapper>
        </>

    )
}


export default Carousel
