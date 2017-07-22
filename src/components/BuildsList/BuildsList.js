import React from 'react'
import './BuildsList.css'
import PropTypes from 'prop-types'

const BuildsList = (props) => (<div className='column'>
  <ul className='buildsList'>
    {props.builds.map(function (element) {
      return (<li key={element}><a onClick={() => props.updateBuild(element)}>{element}</a></li>)
    })}

  </ul>
</div>)
BuildsList.propTypes = {

}
export default BuildsList
