import React from 'react'
import { HelloTitle, Title, Hide, Image, Wrapper } from '../Styles/HomeStyles'
import { motion, MotionConfig } from 'framer-motion'
import { titleAnim, imgAnim } from '../animation'
import Line from './Line'
import Leanne from '../img/Leanne.png'



const HeaderFrontPage = () => {

    return (
        <HelloTitle>

            <Wrapper>
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

                <Image>
                    <motion.img variants={imgAnim} src={Leanne} alt="Leanne's photo"></motion.img>
                </Image>
                <Line />
            </Wrapper>



        </HelloTitle>


    )
}







export default HeaderFrontPage