import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import BuildInfo from '../../components/BuildInfo/BuildInfo'
import BuildsList from '../../components/BuildsList/BuildsList'
class Build extends Component {
  constructor () {
    super()
    this.fetchBuild = this.fetchBuild.bind(this)
    this.fetchAllBuilds = this.fetchAllBuilds.bind(this)
    this.updateBuild = this.updateBuild.bind(this)
    this.state = {
      nav: [
        { text: 'home',
          path: '/'
        },
        { text: 'build',
          path: '/build'
        }
      ],
      currBuild: {},
      allBuilds: []
    }
  }

  updateBuild (build) {
    let url = `http://localhost:3001/getbuild/${build}/`
    this.fetchBuild(url)
  }

  fetchBuild (url) {
    const currBuild = fetch(url).then((responce) => {
      return responce.json()
    }).then((j) => {
      console.log(j)
      this.setState((state, props) => {
        return {currBuild: j}
      })
    }).catch(function (err) {
      console.log('fetch err', url)
      console.log('curr err', err)
    })
    return currBuild
  }

  fetchAllBuilds (url) {
    if (!url) url = 'http://localhost:3001/getbuilds/'
    const allBuilds = fetch(url).then((responce) => {
      return responce.json()
    }).then((j) => {
      console.log(j)
      this.setState((state, props) => {
        return {allBuilds: j}
      })
    }).catch(function (err) {
      console.log('caramba', err)
    })
    return allBuilds
  }

  componentWillMount () {
    this.ref = this.fetchBuild('http://localhost:3001/testdata/failed.json')
    this.builds = this.fetchAllBuilds()
  }

  render () {
    return (
      <section>
        <BuildsList builds={this.state.allBuilds}
         updateBuild={this.updateBuild} />
        <BuildInfo build={this.state.currBuild} />
      </section>
    )
  }
}

Build.propTypes = {

}

export default Build
