import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
    return (
        <>
            <Hero />
            <LatestCollections />
            <BestSeller />
            <OurPolicy />
            <NewsLetter />
        </>
    )
}

export default Home