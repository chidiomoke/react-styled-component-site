import React from 'react'
import Hero from '../components/Header/Hero'
import { Row1 } from '../Globalstyles'
import Carousel from '../components/Carousel/Carousel'
import Product from '../components/Products/Product'
import HeroTwo from '../components/Hero-two/HeroTwo'
import HeroThree from '../components/Herothree/HeroThree'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <>

            <Row1>
                <Hero />
                <Carousel />
                <Product />
                <HeroTwo />
                <HeroThree />
            </Row1>
            <Footer />

        </>
    )
}

export default Home
