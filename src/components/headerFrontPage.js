import React from 'react'
import { HelloTitle, Title, Hide, Image } from '../Styles/AboutStyles'
import { motion, MotionConfig } from 'framer-motion'
import { titleAnim, imgAnim } from '../animation'
import Line from './Line'


const HeaderFrontPage = () => {

    return (
        <HelloTitle>
            <motion.div >
                <Title>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Hi there,</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>My name is <span>Leanne</span> &</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>I am a</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}><span>Software Developer</span></motion.h2>

                    </Hide>

                </Title>

            </motion.div>

            <Image>
                <motion.img variants={imgAnim} src="http://via.placeholder.com/640x360
"></motion.img>
            </Image>

            <Line />

        </HelloTitle>


    )
}







export default HeaderFrontPage