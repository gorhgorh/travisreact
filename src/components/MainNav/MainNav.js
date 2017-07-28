import React from 'react'
import PropTypes from 'prop-types'
import './MainNav.css'

class MainNav extends React.Component {
  constructor () {
    super()
    this.renderNav = this.renderNav.bind(this)
  }

  renderNav (key, index) {
    return (
      <li className='navItem' key={`navitem-${index}`}>
        <a href={ key.path }>{ key.text }</a>
      </li>
    )
  }

  render () {
    const nav = this.props.nav
    return (
      <div className='App-header'>
        <div className='main-nav '>
          <div className={(this.props.botStatus.isConnected === true) ? 'botStatus botOn' : 'botStatus botOff'}>&nbsp;</div>
          <ul>
          {nav.map(this.renderNav)}
          </ul>
        </div>
      </div>
    )
  }
}

MainNav.propTypes = {
  nav: PropTypes.array.isRequired
}

export default MainNav
