import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Projects = () => {


    return (
        <Project>
            <SepProjects>
                <h2>Trump The Scandles</h2>
                <div className="line"></div>
                <Link to='/projects/TTS'>
                    <img src='http://via.placeholder.com/640x360' alt="hellolthere"></img>
                </Link>
            </SepProjects>
            <SepProjects>
                <h2>Amazombie</h2>
                <div className="line"></div>
                <Link to='/projects/amazombie'>
                    <img src='http://via.placeholder.com/640x360' alt="hellolthere"></img>
                </Link>
            </SepProjects>
            <SepProjects>
                <h2>MockBuster</h2>
                <div className="line"></div>
                <Link to='/projects/mockbuster'>
                    <img src='http://via.placeholder.com/640x360' alt="hellolthere"></img>
                </Link>
            </SepProjects>

        </Project>
    )
}

const Project = styled.div`
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
    background: #cccccc;
    margin-bottom: 3rem;
}

img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

`

export default Projects