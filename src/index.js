import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './pages/App'

import NotFound from './NotFound.js'
import Build from './pages/Build/Build'
import MainNav from './components/MainNav/MainNav'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
var ioServer = 'http://localhost:4001'
var io = require('socket.io-client')

// const appRoute = {
//   exactly: true,
//   pattern: '/',
//   title: `yo - homepage`,
//   component: App
// }

class Root extends Component {
  constructor () {
    super()

    this.state = {
      nav: [
        { text: 'home',
          path: '/'
        },
        { text: 'build',
          path: '/build'
        }
      ],
      botStatus: {
        isConnected: false,
        fromServer: false
      }
    }
  }

  componentWillMount () {
    var socket = io(ioServer)
    socket.on('connect', function () {
      console.log('connected', socket.id)
    })
    socket.on('test', function (msg) {
      console.log(msg)
    })
    socket.on('bot:status', (status) => {
      this.setState((state, props) => {
        return {botStatus: status}
      })
    })
  }

  render () {
    return (
    <BrowserRouter>
      <div className='App'>
        <MainNav nav={this.state.nav} botStatus={this.state.botStatus}/>
        <Switch>
          <Route
            exact
            path="/"
            component={props => <App {...props} />}/>
          <Route exact
            path='/build'
            component={Build}
            title= 'yo - homepage'/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>)
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
