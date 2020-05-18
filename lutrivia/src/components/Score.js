import React from 'react'

const Score = (props) => (
    <div>
        {console.log("Score Component")}
        <h3>Points: {props.points}</h3>
    </div>
)

export default Score