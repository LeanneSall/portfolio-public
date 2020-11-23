import React from 'react'
import HeaderFrontPage from '../components/headerFrontPage'
import SpecializeSection from '../components/SpecializeSection'
import FaqSection from '../components/FaqSection'
import styled from 'styled-components'
import Nav from '../components/NavComponent'

//Animation
import { motion } from 'framer-motion'
import { titleAnim, pageAnimation } from '../animation'


const AboutUs = () => {


    return (

        <motion.div style={{
            background: '#24305E'
        }} variants={pageAnimation} exit="exit" initial="hidden" animate='show'>
            <Nav />
            <About >
                <HeaderFrontPage />
                <SpecializeSection />
                <FaqSection />
            </About>
        </motion.div >


    )
}




const About = styled(motion.div)`
background-color: #24305E;


`

export default AboutUs