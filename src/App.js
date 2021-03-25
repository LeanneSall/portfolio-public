import React from 'react'
import GlobalStyle from './components/GlobalStyle'


//Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Hobbies from './pages/Hobbies'

//Router
import { Switch, Route, useLocation } from 'react-router-dom'

//Animation
import { AnimatePresence } from "framer-motion"
import About from './pages/About'

function App() {
  const location = useLocation();


  return (
    <div>

      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/hobbies' exact>
            <Hobbies />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>

    </div>
  );
}


export default App;
