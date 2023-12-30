import React from 'react'
import { useState } from 'react';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

import {
    ProductContainer,
    ProductTopWrapper,
    ProductTitleWrapper,
    ProductH3,
    ProductP,
    ProductArrows,
    ProductImageWrap,
    ProductImage,
    ProductArrowWrap,
    AestheticOfficeWrap,
    AestheticOffice,
    AestheticText,
    ProductRealCover,
    ProductConferenceWrap,
    ConferenceRoom,
    ConferenceRoomText,
    ProductRealHr,
    ProductImageWrapper,
    ContainerProduct
}
    from "./Product.style"
import img1 from "../../assets/boardroom2.png"
import img2 from "../../assets/Herotwoimg.png"
import img3 from "../../assets/boardroom.png"
import img4 from "../../assets/boardroom2.png"

const images = [img1, img2, img3, img4];

const Product = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => {
        setCurrentImageIndex((firstIndex) => firstIndex + 1);
    }
    const prevImage = () => {
        setCurrentImageIndex((currentIndex) => currentIndex - 1);
    }

    return (
        <>

            <ProductContainer>
                <ContainerProduct>
                    <ProductTopWrapper>
                        <ProductTitleWrapper>
                            <ProductH3>
                                Intuitive interiors
                            </ProductH3>
                            <ProductP>Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Accusamus, harum quaerat animi adipisci laboriosam suscipit?
                            </ProductP>
                        </ProductTitleWrapper>
                        <ProductArrowWrap>
                            <ProductArrows onClick={prevImage}>
                                <HiOutlineArrowSmallRight />
                            </ProductArrows>
                            {currentImageIndex !== images.length && (
                                <ProductArrows onClick={nextImage}>
                                    <HiOutlineArrowSmallLeft />
                                </ProductArrows>
                            )}
                        </ProductArrowWrap>
                    </ProductTopWrapper>
                    <ProductImageWrap>
                        <ProductRealCover>
                            <AestheticOfficeWrap>
                                <AestheticOffice>Aesthetic Office</AestheticOffice>
                                <AestheticText>Lorem ipsum dolor sit amet consectetur.</AestheticText>
                            </AestheticOfficeWrap>
                            <ProductRealHr hr />
                            <ProductConferenceWrap>
                                <ConferenceRoom>Conference Room</ConferenceRoom>
                                <ConferenceRoomText>8 x 16 Feet</ConferenceRoomText>
                            </ProductConferenceWrap>
                        </ProductRealCover>
                        <ProductImageWrapper>
                            <ProductImage src={images[currentImageIndex]} />
                        </ProductImageWrapper>
                    </ProductImageWrap>
                </ContainerProduct>
            </ProductContainer>

        </>
    )
}

export default Product;

{/* <ProductImage src={third} /> */ }
