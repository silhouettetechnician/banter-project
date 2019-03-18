import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Browser, Route, Switch, Link } from 'react-router-dom'

import 'bulma'

import './style.scss'
import './animate.css'

import ChuckNorris from './components/chuckNorris.js'
import GeekJokes from './components/geekjokes.js'
import DadJokes from './components/dadjokes.js'
import Home from './components/home.js'

const App = () => {
  return(
    <Browser>
      <div>
        <div>
          <Link to="/" className=""></Link>
        </div>
        <Switch>
          <Route exact path="/chucknorris" component={ChuckNorris} />
          <Route exact path="/dadjokes" component={DadJokes} />
          <Route exact path="/geekjokes" component={GeekJokes} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Browser>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
