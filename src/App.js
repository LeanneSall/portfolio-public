import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/NavComponent'

//Pages
import AboutUs from './pages/About'
import Contact from './pages/Contact'
import Hobbies from './pages/Hobbies'
import Projects from './pages/Projects'
//Router
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <AboutUs />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/hobbies'>
          <Hobbies />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>

    </div>
  );
}


export default App;
