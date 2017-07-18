import React, { Component } from 'react'

const BuildInfo = (props) => {
  console.log(props)
  return (
    <div>
      {props.build.id}
      {Object.keys(props.build).map((key) => {
        return (
          <div key={key}>{key} :</div>
        )
      })}
    </div>
  )
}

export default BuildInfo