import React from 'react'
import Filler from './Filler'

const Progresbar = (props) => {
  return (
    <div className="progres-bar">
      <Filler
      percentage={props.percentage}
      />
    </div>
  )
}

export default Progresbar;