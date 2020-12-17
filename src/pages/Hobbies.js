import React from 'react'
import Nav from '../components/NavComponent'
import styled from "styled-components"

//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const Hobbies = () => {


    return (
        <motion.div style={{ background: ' #374785' }} variants={pageAnimation} exit="exit" initial='hidden' animate='show'>
            <Hob >
                <Nav />
                <Cards>
                    <Card>
                        <h4>3D Printing</h4>
                        <img src="" alt="blah"></img>
                        <p>This is my hobby and I like it sometimes</p>
                    </Card>
                    <Card>
                        <h4>Guitar</h4>
                    </Card>
                    <Card>
                        <h4>Piano</h4>
                    </Card>
                    <Card>
                        <h4>Music Production</h4>
                    </Card>
                    <Card>
                        <h4>Airbrushing</h4>
                    </Card>
                    <Card>
                        <h4>Motorcycles</h4>
                    </Card>
                    <Card>
                        <h4>Classic Cars</h4>
                    </Card>
                    <Card>
                        <h4>Welding</h4>
                    </Card>
                    <Card>
                        <h4>3D Modelling</h4>
                    </Card>

                </Cards>
            </Hob>
        </motion.div>
    )
}


const Hob = styled.div`
min-height: 100vh;
background-color: ' #374785'


`

const Cards = styled(motion.div)`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
margin: 5rem 10rem;
margin-top: 5rem;



`
const Card = styled.div`
    width: 500px;
    height: 500px;
    
    background-color: #A8D0E6;
    margin-bottom: 5rem;
    box-shadow: 5px 10px blueviolet;
    border-radius: 50%;
    padding: 2em;
    text-align: center;
    
    
 
    

`

export default Hobbies