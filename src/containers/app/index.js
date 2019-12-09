import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import LabelsPage from '../labels'
import FormErrorsPage from '../errorStates.js'

const App = () => (
  <div className="app">
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/labels">Labels</Link>
      <Link to="/form-errors">Form Errors</Link>


    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/labels" component={LabelsPage} />
      <Route exact path="/form-errors" component={FormErrorsPage} />

    </main>
  </div>
)

export default App
