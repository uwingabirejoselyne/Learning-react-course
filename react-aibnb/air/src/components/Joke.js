import React from 'react'

const Joke = (props) => {
  return (
    <div>
      <h1>{props.setup}</h1>
      <p>{props.punchline}</p>
    </div>
  )
}

export default Joke
