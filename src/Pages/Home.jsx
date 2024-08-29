import React from 'react'
import Hero from '../components/Hero/Hero'
import FeaturedSection from '../components/FeaturedSection/FeaturedSection'
import VideoPlay from '../components/VideoPlay/VideoPlay'
import Counter from '../components/Counter/Counter'
import BestDeal from '../components/BestDeal/BestDeal'
import Properties from '../components/Properties/Properties'
import ViewSection from '../components/ViewSection/ViewSection'
import ContactUs from '../components/ContactUs/ContactUs'
import img from '../images/img.jpg'
import contact from '../images/contact-bg.jpg'

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedSection />
            <ViewSection url={img} h6={'Video View'} h2={'Get Closer View & Different Feeling'}/>
            <VideoPlay />
            <Counter />
            <BestDeal />
            <Properties />
            <ViewSection url={contact} h6={'Contact Us'} h2={'Get In Touch With Our Agents'}/>
            <ContactUs />
        </>
    )
}
