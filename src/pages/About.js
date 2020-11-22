import React from 'react'
import HeaderFrontPage from '../components/headerFrontPage'
import SpecializeSection from '../components/SpecializeSection'
import FaqSection from '../components/FaqSection'
import styled from 'styled-components'

const AboutUs = () => {


    return (
        <>
            <About>
                <HeaderFrontPage />
                <SpecializeSection />
                <FaqSection />
            </About>

        </>

    )
}


const About = styled.div`



`

export default AboutUs