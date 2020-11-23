import React, { useState } from 'react'
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/NavComponent'

//Pages
import AboutUs from './pages/About'
import Contact from './pages/Contact'
import Hobbies from './pages/Hobbies'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
//Router
import { Switch, Route, useLocation } from 'react-router-dom'

//Animation
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();


  return (
    <div>

      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/projects/:id'>
            <ProjectDetail />
          </Route>
          <Route path='/hobbies'>
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
