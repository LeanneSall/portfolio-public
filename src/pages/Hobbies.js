import React from 'react'
import styled from 'styled-components'
import Nav from '../components/NavComponent'
//Animation
import { motion } from 'framer-motion'
import { pageAnimation, fade, projectLine } from '../animation'
import print from '../img/print.jpg'
import DirtBike from '../img/DirtBike.jpg'
import Explore from '../img/Explore.jpg'
import guitar from '../img/guitar.jpg'
import MGB from '../img/MGB.jpg'
import motorcycle from '../img/motorcycle.jpg'
import music from '../img/music.jpg'
import Piano from '../img/Piano.jpg'
import reading from '../img/reading.jpg'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

const Hobbies = () => {

    return (
        <motion.div style={{
            background: '#8B3D3D'
        }} variants={pageAnimation} exit="exit" initial="hidden" animate='show'>
            <Nav />
            <Hobby>
                <motion.h2 variants={fade} layout>Hobbies</motion.h2>
                <Line variants={projectLine} ></Line>
                <Carousel stopOnHover={true} dynamicHeight={true} centerMode={false} showArrows={true} style={{ height: "30vh" }} showThumbs={false} infiniteLoop={true}>
                    <div>
                        <Image src={guitar} />
                        <p className="legend">Guitar: I love playing guitar, pictured above is my  practice area</p>
                    </div>
                    <div>
                        <Image src={motorcycle} />
                        <p className="legend">Motorcycles: That is me on my 1989 Suzuki GS500</p>
                    </div>
                    <div>
                        <Image src={MGB} />
                        <p className="legend">Classic Cars: This is my 1965 MG MGB that I am restoring</p>
                    </div>
                    <div>
                        <Image src={Explore} />
                        <p className="legend">Exploring: Whether it is a hike or an off road adventure I love to be outdoors and find new spots</p>
                    </div>
                    <div>
                        <Image src={Piano} />
                        <p className="legend">Piano: I have played piano since I was a kid! I currently have this electronic one for practicing(That is my cat Skully)</p>
                    </div>
                    <div>
                        <Image src={music} />
                        <p className="legend">Music Production: I use FL Studio and make beats in my spare time for fun</p>
                    </div>
                    <div>
                        <Image src={print} />
                        <p className="legend">3D Printing: I own a Creality CR-10S pictured above, I can build models and print them too!</p>
                    </div>
                    <div>
                        <Image src={DirtBike} />
                        <p className="legend">Dirt Biking: This is a photo taken at Stave Lake when we took my 82 Yamaha XT200 and my friends 1980 Suzuki SP400</p>
                    </div>
                    <div>
                        <Image src={reading} />
                        <p className="legend">Reading: I'm a big non-fiction reader with my favs being like Atomic Habits by James Clear</p>
                    </div>
                </Carousel>
            </Hobby>
        </motion.div >
    );
}


const Hobby = styled(motion.div)`
background: '8B3D3D';
overflow: hidden;
padding: 5rem 10rem;
height: 100vh;


h2 {
    padding: 1rem 0rem;
}

p {
    
}

.legend {
    height: auto;
    font-size: larger !important;
    
}
@media (max-width: 1300px){
    text-align: center;
}

`


const Image = styled(motion.img)`
height: 70vh;
object-fit: contain;


`

const Line = styled(motion.div)`
    height: 0.5rem;
    background: #FFF ;
    margin-bottom: 3rem;
`




export default Hobbies