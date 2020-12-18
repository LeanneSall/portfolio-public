import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { fade, projectLine, imgAnim } from '../animation'
import styled from 'styled-components'

const ToggleProject = ({ children, title, img }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <motion.div layout className='Image' onClick={() => setToggle(!toggle)}>
            <motion.h2 variants={fade} layout>{title}</motion.h2>
            <Line variants={projectLine} ></Line>

            <Hide><Img variants={imgAnim} src={img} alt="hellolthere"></Img></Hide>
            {toggle ? children : ""}

        </motion.div>


    )


}

const Line = styled(motion.div)`



    height: 0.5rem;
    background: #FFF ;
    margin-bottom: 3rem;
`

const Hide = styled.div`
overflow: hidden;

`

const Img = styled(motion.img)`
    width: 100%;
    height: 60vh;
    object-fit: cover;
    cursor: pointer;
    
`

export default ToggleProject