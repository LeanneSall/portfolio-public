import React from 'react'
import { HelloTitle, Title, Hide, Image } from '../Styles/AboutStyles'

import styled from 'styled-components';

const HeaderFrontPage = () => {



    return (
        <HelloTitle>
            <Title>
                <Hide>
                    <h2>Hi there,</h2>
                </Hide>
                <Hide>
                    <h2>My name is <span>Leanne</span> &</h2>
                </Hide>
                <Hide>
                    <h2>I am a</h2>
                </Hide>
                <Hide>
                    <h2><span>Software Developer</span></h2>
                </Hide>
            </Title>

            <Image>
                <div></div>
            </Image>

        </HelloTitle>


    )
}







export default HeaderFrontPage