import React from 'react';
import Typist from 'react-typist'

const SpecializeSection = () => {


    return (
        <div className="specialize">
            <h2>I Specialize In: </h2>
            <Typist>
                <ul className="cards">
                    <li>Full Stack</li>
                    <li>Node</li>
                    <li>Linux</li>
                </ul>
                <ul className="cards">
                    <li>Full Stack</li>
                    <li>Node</li>
                    <li>Linux</li>
                </ul>
                <ul className="cards">
                    <li>Full Stack</li>
                    <li>Node</li>
                    <li>Linux</li>
                </ul>
            </Typist>
        </div>

    )
}

export default SpecializeSection;