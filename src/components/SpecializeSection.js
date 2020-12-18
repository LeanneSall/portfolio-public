import React from 'react';
import Typist from 'react-typist'
import styled from 'styled-components'
import { Card } from '../Styles/HomeStyles'


const SpecializeSection = () => {


    return (

        // <h2>I Specialize In: </h2>

        <Card>

            <h2>I Specialize in: </h2>
            <ul>
                <Typist cursor={{ show: false }}>
                    <li>Full Stack</li>
                    <li>Node</li>
                    <li>Linux</li>
                    <li>Full Stack</li>
                    <li>Node</li>
                    <li>Linux</li>
                </Typist>
            </ul>

            <ul>
                <Typist cursor={{ show: false }} >
                    <Typist.Delay ms={3000} />
                    <li>Full Stack</li>
                    <li>Node</li>
                    <li>Linux</li>
                    <li>Full Stack</li>
                    <li>Node</li>
                    <li>Linux</li>
                </Typist>
            </ul>
            <ul>
                <Typist cursor={{ show: false }} >
                    <Typist.Delay ms={6000} />
                    <li>Full Stack</li>
                    <li>Node</li>
                    <li>Linux</li>
                    <li>Full Stack</li>
                    <li>Node</li>
                    <li>Linux</li>
                </Typist>
            </ul>

        </Card>


    )
}







export default SpecializeSection;