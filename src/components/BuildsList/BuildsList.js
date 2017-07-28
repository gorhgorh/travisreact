import React from 'react'
import './BuildsList.css'
// import PropTypes from 'prop-types'

const BuildsList = (props) => {
  return (<div className='column'>
    <ul className='buildsList'>
      {props.builds.map(function (element) {
        var statusClass
        if (element.status) {
          console.log('yo', element)
          statusClass = (element.status === "0") ? 'passed' : 'errored'
        } else statusClass = 'unkown'

        return (
          <li key={element.key} className={statusClass}>
            <div className={element.lang + ' langCont'}>&nbsp;</div>
            <button onClick={() => props.updateBuild(element.key)}>
              <span>{element.repo}</span><br/>
              <span>{element.start}{element.status}</span><br/>
            </button>
          </li>)
      })}
    </ul>
  </div>)
}
// BuildsList.propTypes = {

// }
export default BuildsList
