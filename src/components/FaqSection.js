import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle'

const FaqSection = () => {




    return (
        <FAQ>
            <h2>FAQ:</h2>
            <Toggle>
                <div className="question">
                    <h4>Why Hire Me?</h4>
                    <div className="answer">
                        <p>Cause I am the bomb diggity</p>
                    </div>
                </div>
            </Toggle>
            <div className="question">
                <h4>Why Hire Me?</h4>
                <div className="answer">
                    <p>Cause I am the bomb diggity</p>

                </div>
            </div>
            <div className="question">
                <h4>Why Hire Me?</h4>
                <div className="answer">
                    <p>Cause I am the bomb diggity</p>
                </div>
            </div>
            <div className="question">
                <h4>Why Hire Me?</h4>
                <div className="answer">
                    <p>Cause I am the bomb diggity</p>
                </div>
            </div>
            <div className="question">
                <h4>Why Hire Me?</h4>
                <div className="answer">
                    <p>Cause I am the bomb diggity</p>
                </div>
            </div>
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

    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }




`

export default FaqSection 