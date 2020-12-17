import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import { pageAnimation, imgAnim, fade, projectLine, pageTrans } from '../animation'
import Nav from '../components/NavComponent'

const Projects = () => {


    return (
        <motion.div style={{ background: '#7accbe' }} variants={pageAnimation} exit="exit" initial='hidden' animate='show' >
            <Nav />
            <Project>
                <SepProjects>
                    <motion.h2 variants={fade}>Trump The Scandles</motion.h2>
                    <motion.div variants={projectLine} className="line"></motion.div>
                    <Link to='/projects/TTS'>
                        <Hide>
                            <motion.img variants={imgAnim} src='http://via.placeholder.com/640x360' alt="hellolthere"></motion.img></Hide>
                    </Link>
                </SepProjects>
                <SepProjects>
                    <motion.h2 variants={fade}>Amazombie</motion.h2>
                    <motion.div variants={projectLine} className="line"></motion.div>
                    <Link to='/projects/amazombie'>
                        <Hide>
                            <motion.img variants={imgAnim} src='http://via.placeholder.com/640x360' alt="hellolthere"></motion.img></Hide>
                    </Link>
                </SepProjects>
                <SepProjects>
                    <motion.h2 variants={fade}>MockBuster</motion.h2>
                    <motion.div variants={projectLine} className="line"></motion.div>
                    <Link to='/projects/mockBuster'>
                        <Hide>
                            <motion.img variants={imgAnim} src='http://via.placeholder.com/640x360' alt="hellolthere"></motion.img>
                        </Hide>
                    </Link>
                </SepProjects>


            </Project>
        </motion.div>
    )
}

const Project = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;

h2 {
    padding: 1rem 0rem;
}

`

const SepProjects = styled.div`
padding-bottom: 10rem;

.line {
    height: 0.5rem;
    background: #F76C6C ;
    margin-bottom: 3rem;
}

img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
}

`

const Hide = styled.div`
overflow: hidden;

`
const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #24305E;
z-index: 2;
`




export default Projects