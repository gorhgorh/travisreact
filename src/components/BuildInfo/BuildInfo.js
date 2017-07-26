import React from 'react'

const BuildInfo = (props) => {
  return (
    <div className='column'>
      {props.build.id}
      {Object.keys(props.build).map((key) => {
        return (
          <div key={key}>{key} : {props.build[key]}</div>
        )
      })}
    </div>
  )
}

export default BuildInfo
