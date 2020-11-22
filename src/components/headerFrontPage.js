import React from 'react'
import { HelloTitle, Title, Hide, Image } from '../Styles/AboutStyles'
import { motion, MotionConfig } from 'framer-motion'


const HeaderFrontPage = () => {

    const titleAnimation = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } }
    }

    const containerTitle = {
        hidden: { x: 100 },
        show: { x: 0, transition: { duration: 1, ease: 'easeOut' } }
    }

    return (
        <HelloTitle>
            <motion.div variants={containerTitle} initial='hidden' animate='show'>
                <Title>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>Hi there,</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>My name is <span>Leanne</span> &</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>I am a</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}><span>Software Developer</span></motion.h2>
                    </Hide>
                </Title>
            </motion.div>

            <Image>
                <div></div>
            </Image>

        </HelloTitle>


    )
}







export default HeaderFrontPage