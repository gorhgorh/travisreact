import React, { Component } from 'react'
import './App.css'
import MainNav from './components/MainNav/MainNav'

class App extends Component {
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
      ]
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
        <MainNav nav={this.state.nav}/>

        </div>
      </div>
    )
  }
}

export default App
