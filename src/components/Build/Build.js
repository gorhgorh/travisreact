import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import MainNav from '../MainNav/MainNav'
import BuildInfo from '../BuildInfo/BuildInfo'
class Build extends Component {
  constructor () {
    super()
    this.fetchBuild = this.fetchBuild.bind(this)
    this.state = {
      nav: [
        { text: 'home',
          path: '/'
        },
        { text: 'build',
          path: '/build'
        }
      ],
      currBuild: {
        id: 246669972,
        repository: {
          id: 13822700,
          name: 'travisTest',
          owner_name: 'gorhgorh'
        },
        config: {
          language: 'node_js',
          node_js: [
            '7'
          ],
          install: [
            'npm install',
            'npm test'
          ],
          notifications: {
            irc: {
              channels: [
                'chat.freenode.net#cibot'
              ],
              template: [
                '%{message}'
              ]
            },
            webhooks: {
              urls: [
                'http://825310a4.ngrok.io/build'
              ]
            }
          }
        },
        status: 0,
        result: 0,
        status_message: 'Passed',
        result_message: 'Passed',
        started_at: '2017-06-24T23:53:41Z',
        finished_at: '2017-06-24T23:55:25Z',
        duration: 104,
        build_url: 'https://travis-ci.org/gorhgorh/travisTest/builds/246669972',
        commit_id: 71607748,
        commit: 'c880d3361bfd52c6b3d7e1b2efafb72dad46ef07',
        base_commit: null,
        head_commit: null,
        branch: 'master',
        message: 'linking bot and server',
        compare_url: 'https://github.com/gorhgorh/travisTest/compare/62553944f8da...c880d3361bfd',
        committed_at: '2017-06-24T23:53:30Z',
        author_name: 'gorhgorh',
        author_email: 'gorhgorh@lesnodebots.eu',
        committer_name: 'gorhgorh',
        committer_email: 'gorhgorh@lesnodebots.eu'
      }
    }
  }

  fetchBuild (url) {
    console.log(this)
    const currBuild = fetch(url).then((responce) => {
      console.log(responce)
      return responce.json()
    }).then((j) => {
      console.log(j)
      console.log(this)
      this.setState((state, props) => {
        return {currBuild: j}
      })
    }).catch(function (err) {
      console.log('caramba', err)
    })
    return currBuild
  }
  componentWillMount () {
    this.ref = this.fetchBuild('http://localhost:3001/testdata/failed.json')
  }

  render () {
    return (
      <div>
        <MainNav nav={this.state.nav} />
        <BuildInfo build={this.state.currBuild} />
      </div>
    )
  }
}

Build.propTypes = {

}

export default Build
