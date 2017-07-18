import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Build from './components/Build/Build'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route } from 'react-router-dom'

// const appRoute = {
//   exactly: true,
//   pattern: '/',
//   title: `yo - homepage`,
//   component: App
// }

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route
          path="/"
          component={props => <App {...props} />}
        />
        <Route exact path='/build' component={Build} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
