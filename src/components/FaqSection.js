import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'

const FaqSection = () => {




    return (
        <FAQ>
            <h2>FAQ:</h2>
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
                <Toggle title='Why Hire Me?'>
                    <div className="answer">
                        <p>Cause I am the bomb diggity</p>
                    </div>

                </Toggle>
            </AnimateSharedLayout>
        </FAQ>
    )
}

const FAQ = styled.div`
min-height: 90vh;
    display: block;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    h2 {
        padding-bottom: 2rem;
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