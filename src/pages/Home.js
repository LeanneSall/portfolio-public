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
            background: '#24305E'
        }} variants={pageAnimation} exit="exit" initial="hidden" animate='show'>
            <Nav />

            <HomePage >
                <HeaderFrontPage />
            </HomePage>
        </motion.div >


    )
}




const HomePage = styled(motion.div)`
background-color: #24305E;


`


export default Home