import React from 'react'

const NewGame = (props) => (
    <div>
        {console.log("New Game component")}
        <button onClick ={() => props.newQuiz(props.questions)}>
            New Game
        </button>
    </div>
)

export default NewGame