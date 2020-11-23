import { createGlobalStyle } from 'styled-components';
import 'fontsource-sanchez'


const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    
    color: white;
    font-family: "Sanchez";
    
}

h2 {
    font-weight: lighter;
    font-size: 4rem;
}

h3 {
    color: white;
}

h4 {
    font-size: 2rem;
}
span {
    font-weight: bold;
    color: #F76C6C;
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
}


`

export default GlobalStyle



// //text
// //White

// //background
// #24305E; //Hobbies
// #374785 //Contact
// #A8D0E6 //Home
// #7accbe //Projects
// //accent
// #F8E9A1
// #F76C6C 