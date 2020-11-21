import React from 'react'

import styled from 'styled-components';

const HeaderFrontPage = () => {



    return (
        <HelloTitle>
            <Title>
                <div className="hide">
                    <h2>Hi there,</h2>
                </div>
                <div className="hide">
                    <h2>My name is <span>Leanne</span> &</h2>
                </div>
                <div className="hide">
                    <h2>I am a</h2>
                </div>
                <div className="hide">
                    <h2><span>Software Developer</span></h2>
                </div>
            </Title>

            <Image>
                <img src="" alt="animated-leanne"></img>
            </Image>

        </HelloTitle>


    )
}

const HelloTitle = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    
`

const Title = styled.div`
flex: 1;
padding-right: 5rem;
font-weight: lighter;

`
const Image = styled.div`
flex: 1;


`





export default HeaderFrontPage