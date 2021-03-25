import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import { motion } from 'framer-motion'
import { fade } from '../animation';

import cutedog from '../img/cutedog.jpg'
import dogincoat from '../img/dogincoat.jpg'
import dogandcat from '../img/dogandcat.jpg'
import potatocat from '../img/potatocat.jpg'
import cat from '../img/cat.jpg'


const FaqSection = () => {




    return (
        <FAQ variants={fade}>
            <motion.h2>Want to know more?</motion.h2>
            <motion.h3>Here are some frequently asked questions:</motion.h3>
            <AnimateSharedLayout>
                <Toggle title='Why Hire Me?'>
                    <div className="answer">
                        <p>I love learning, working with others and solving probelms. I believe these skills make me a good programmer and someone who would be a great addition to any team! Also I have a really cute cat and dog </p>
                    </div>

                </Toggle>
                <Toggle title='Did you say you had a cat and a dog?'>
                    <div className="answer">
                        <p>Why yes I do! Pictured below is my dog Winnie who is a 2 year old rescue and my 1-1/2 year old cat Skully</p>
                        <ImgWrapper>
                            <Image src={cat} />
                            <Image src={dogincoat} />
                            <Image src={dogandcat} />
                            <Image src={potatocat} />
                            <Image src={cutedog} />

                        </ImgWrapper>
                    </div>

                </Toggle>
                <Toggle title='What do you do in your spare time?'>
                    <div className="answer">
                        <p>I'm always doing something whether is coding or some of my hobbies! You can check out my various hobbies on my <a style={{ textDecoration: "none", color: "white" }} href="/hobbies">hobby page</a>!</p>
                    </div>

                </Toggle>

            </AnimateSharedLayout>
        </FAQ>
    )
}

const ImgWrapper = styled(motion.div)`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;


`

const Image = styled(motion.img)`
    height: 20rem;
    width: 20rem;
    margin-top: 2rem;
    object-fit: cover;
`

const FAQ = styled(motion.div)`
z-index: 1;
min-height: 70vh;
display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    padding: 5rem 10rem;
    margin-top: 8rem;
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
        margin-top: 2rem;
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