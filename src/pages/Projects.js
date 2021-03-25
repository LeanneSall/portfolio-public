import React from 'react'
import styled from 'styled-components'


import { AnimateSharedLayout, motion } from 'framer-motion'
import { pageAnimation, projectLine, fade, imgAnim } from '../animation'
import Nav from '../components/NavComponent'
import Pokedex from '../img/Pokedex.png'
import Whisk from '../img/Whisk.png'
import amazombie from '../img/amazombie.png'

import { ImageOverlay } from 'react-image-overlay-effect'

const Projects = () => {


    return (
        <motion.div style={{ background: '#262626' }} variants={pageAnimation} exit="exit" initial='hidden' animate='show' >
            <Nav />
            <Project>
                <motion.h2 variants={fade} layout>Projects</motion.h2>
                <Line variants={projectLine} ></Line>
                <AnimateSharedLayout>
                    <SepProjects>
                        <ImageOverlay style={{ objectFit: "cover", height: "30vh", width: "30rem" }} variants={imgAnim} src={Pokedex} alt="hellolthere"
                            description={<div style={{ padding: "10px" }}>
                                <ul style={{ paddingBottom: "10px" }}>Learning Outcomes: <li>Javascript</li> <li>RazorPages</li><li>ASP.NET Core</li><li>Microsoft SQL</li> <li>Authentication</li><li>API calls</li> </ul>

                                <Button><a href="https://github.com/LeanneSall/pokeverse">Github</a></Button>
                                <Button><a href="https://pokeverse.azurewebsites.net/">Website</a></Button>

                            </div>
                            }
                        //
                        />
                        <ImageOverlay style={{ objectFit: "cover", height: "30vh", width: "30rem" }} variants={imgAnim} src={Whisk} alt="hellolthere" description={<div style={{ padding: "10px" }}>
                            <ul style={{ paddingBottom: "10px" }}>Learning Outcomes: <li>AWS</li> <li>Amplify</li><li>Lambda</li><li>Node.JS</li> <li>DynamoDB</li><li>Full Stack JS</li><li>MaterialUI</li> </ul>

                            <Button><a href="https://www.github.com">Coming Soon!</a></Button>
                            {/* <Button><a href="">Link</a></Button> */}

                        </div>
                        } />
                        <ImageOverlay style={{ objectFit: "cover", height: "30vh", width: "30rem" }} variants={imgAnim} src={amazombie} alt="hellolthere" description={<div style={{ padding: "10px" }}>
                            <ul style={{ paddingBottom: "10px" }}>Learning Outcomes: <li>Javascript</li> <li>SASS</li><li>Front End Development</li><li>Agile</li> <li>Website Design</li><li>Bootstrap</li> </ul>

                            <Button><a href="https://github.com/LeanneSall/Amazombie">Github</a></Button>


                        </div>
                        } />
                    </SepProjects>
                    <motion.h2>Stay Tuned For More Project On The Way</motion.h2>
                </AnimateSharedLayout>
            </Project>
        </motion.div >
    )
}


const Button = styled.button`
display:inline-block;
padding:0.3em 1.2em;
margin:0 0.1em 0.1em 2em;
border:0.16em solid rgba(255,255,255,0);
border-radius:2em;
box-sizing: border-box;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
background-color:#4eb5f1;
text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
text-align:center;
transition: all 0.2s;
    :hover {
        border-color: rgba(255,255,255,1);
}
 a {
     text-decoration: none;
 }
`


const Project = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;

.line {
    height: 0.5rem;
    background: #FFF ;
    margin-bottom: 3rem;
}

h2 {
    padding: 1rem 0rem;
}
@media (max-width: 1300px){
    text-align: center;
}

`

const Line = styled(motion.div)`



    height: 0.5rem;
    background: #FFF ;
    margin-bottom: 3rem;
`



const SepProjects = styled.div`

display: flex;
justify-content: space-between;
flex-wrap: wrap;
overflow: hidden;

h3 {
    text-align: center;
}

ul {
    text-align: center;
    list-style-position: inside;
}

@media (max-width: 1300px){
  justify-content: center;
   
}

`






export default Projects

