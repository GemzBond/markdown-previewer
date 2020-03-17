import React from 'react'

function Previewer(props) {
  return (
    <div>
      <label className="font-weight-bold mt-5">Previewer</label>
      <p>{props.text}</p>
    </div>
  )
}

export default Previewer