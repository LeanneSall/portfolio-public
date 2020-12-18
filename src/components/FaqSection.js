import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import { motion } from 'framer-motion'
import { fade } from '../animation';


const FaqSection = () => {




    return (
        <FAQ variants={fade}>
            <motion.h2>Want to know more?</motion.h2>
            <motion.h3>Here are some frequently asked questions:</motion.h3>
            <AnimateSharedLayout>
                <Toggle title='Why Hire Me?'>
                    <div className="answer">
                        <p>Cause I am the bomb diggity</p>
                    </div>

                </Toggle>
                <Toggle title='What do you specialize in?'>
                    <div className="answer">
                        <p>Cause I am the bomb diggity</p>
                    </div>

                </Toggle>
                <Toggle title='What do you do in your spare time?'>
                    <div className="answer">
                        <p>Cause I am the bomb diggity</p>
                    </div>

                </Toggle>
                <Toggle title='Why Hire Me?'>
                    <div className="answer">
                        <p>Cause I am the bomb diggity</p>
                    </div>

                </Toggle>
                <Toggle title='Why Hire Me?'>
                    <div className="answer">
                        <p>Cause I am the bomb diggity</p>
                    </div>

                </Toggle>
            </AnimateSharedLayout>
        </FAQ>
    )
}

const FAQ = styled(motion.div)`
min-height: 70vh;
    display: block;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    margin-top: 8rem;
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    h3 {
        padding-top: 1rem;
        padding-bottom: 3rem;
        font-size: 2rem;
        font-weight: lighter;
    }

    .faqline {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
    padding: 3rem 0rem;
    cursor: pointer;
    }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }



`

export default FaqSection 