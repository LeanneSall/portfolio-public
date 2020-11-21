import React from 'react'

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


    div {
        background-color: #A8D0E6;
        border-radius: 50%;
        width: 25rem;
        height: 25rem;
        margin-left: 15rem;
    }
    

`

const Hide = styled.div`
overflow: hidden;
`





export default HeaderFrontPage