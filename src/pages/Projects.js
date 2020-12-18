import React from 'react'
import styled from 'styled-components'


import { AnimateSharedLayout, motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import Nav from '../components/NavComponent'
import ToggleProject from '../components/ToggleProject'
import trumpgame from '../img/trumpgame.png'
import Skihist from '../img/Skihist.png'
import amazombie from '../img/amazombie.png'

const Projects = () => {


    return (
        <motion.div style={{ background: '#262626' }} variants={pageAnimation} exit="exit" initial='hidden' animate='show' >
            <Nav />
            <Project>
                <AnimateSharedLayout>
                    <ToggleProject title="SkiHist Music App" img={Skihist}>
                        <SepProjects>
                            <motion.h3>Music app made for Artist Skihist and the new Album</motion.h3>
                            <ul>
                                <li>Javascript</li>
                                <li>Sass</li>
                            </ul>

                        </SepProjects>
                    </ToggleProject>
                    <ToggleProject title="Trump Scandle Game" img={trumpgame}>
                        <SepProjects>
                            <motion.h3>This is my game I made about Trumps time at the whitehouse</motion.h3>
                            <ul>
                                <li>Unity C#</li>
                            </ul>

                        </SepProjects>
                    </ToggleProject>
                    <ToggleProject title="Amazombie" img={amazombie}>
                        <SepProjects>
                            <motion.h3>Group class project for Zombie Subscription Boxes</motion.h3>
                            <ul>
                                <li>Javascript</li>
                                <li>Sass</li>
                            </ul>

                        </SepProjects>
                    </ToggleProject>
                </AnimateSharedLayout>

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
    background: #FFF ;
    margin-bottom: 3rem;
}

h3 {
    text-align: center;
}

ul {
    text-align: center;
    list-style-position: inside;
}

`






export default Projects