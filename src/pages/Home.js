import React from 'react'
import HeaderFrontPage from '../components/headerFrontPage'
import styled from 'styled-components'
import Nav from '../components/NavComponent'
//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'


const Home = () => {


    return (

        <motion.div style={{
            background: '#1A1A1A'
        }} variants={pageAnimation} exit="exit" initial="hidden" animate='show'>
            <Nav />

            <HomePage >
                <HeaderFrontPage />
            </HomePage>
        </motion.div >


    )
}




const HomePage = styled(motion.div)`
background-color: #1A1A1A;


`


export default Home