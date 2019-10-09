import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import {
  Icon,
  Navigator,
  UserInfo
} from './components'

import {
  Home,
  About,
  License
} from './pages'

import './App.scss'

var routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    render: () => <Home />
  },
  {
    name: 'About',
    path: '/about',
    render: () => <About />
  },
  {
    name: License,
    path: '/license',
    hidden: true,
    render: () => <License />
  }
]

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='sidebar'>
          <div className='title'>
            <Icon />
            <h1>SHLAPPAS PI</h1>
          </div>
          <Navigator routes={routes.filter(r => !r.hidden)} />
          <UserInfo type='small' />
        </div>
        <Switch>
          {
            routes
              .map((r, idx) => <Route key={idx} {...r} />)
          }
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
