import React from 'react'
import './BuildsList.css'
const BuildsList = (props) => (<div className='column'>
  <ul className='buildsList'>
    {props.builds.map(function (element) {
      return (<li key={element}><a onClick={() => props.updateBuild(element)}>{element}</a></li>)
    })}

  </ul>
</div>)

export default BuildsList
