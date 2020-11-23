import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <NavStyles>

            <h1><Link to='/'>Leanne Sall</Link></h1>
            <ul>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/hobbies'>Hobbies</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

        </NavStyles>

    )
}

export let NavStyles = styled.div`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;


a {
    color: white;
    text-decoration: none;
}

ul {
    display: flex;
    list-style: none;
}

li {
    padding-left: 5rem;
    font-size: 1.4em;
    position: relative;
}


`




export default Nav