import React from 'react';
import styled from 'styled-components'


const Nav = () => {


    return (
        <Nav>
            <h1><a href='#'>Leanne Sall</a></h1>
            <ul>
                <li><a href='#'>>About</a></li>
                <li><a href='#'>Project</a></li>
                <li><a href='#'>Hobbies</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

        </Nav>

    )
}

const NavStyles = styled.div`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;


`




export default Nav