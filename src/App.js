import React from 'react'
import Nav from './components/NavComponent'
import AboutUs from './pages/aboutUs'
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <div>

      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}


export default App;
