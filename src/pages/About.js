import React from 'react'
import FaqSection from '../components/FaqSection'
import SpecializeSection from '../components/SpecializeSection'
import styled from 'styled-components'
import Nav from '../components/NavComponent'
//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'

const About = () => {


    return (

        <motion.div style={{
            background: '#2F2525'
        }} variants={pageAnimation} exit="exit" initial="hidden" animate='show'>
            <Nav />
            <ScrollTop />
            <AboutUs >
                <SpecializeSection />
                <FaqSection />
            </AboutUs>

        </motion.div >


    )
}




const AboutUs = styled(motion.div)`
background-color: #2F2525;

    @media (max-width: 1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }

`


export default About