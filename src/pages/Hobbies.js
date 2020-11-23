import React from 'react'
import Nav from '../components/NavComponent'

//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const Hobbies = () => {


    return (
        <motion.div style={{ background: ' #374785' }} variants={pageAnimation} exit="exit" initial='hidden' animate='show'>
            <Nav />
            <h1>Hello</h1>
        </motion.div>
    )
}

export default Hobbies