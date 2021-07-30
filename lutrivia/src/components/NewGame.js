import React from 'react'

const NewGame = ({onClick}) => {
    return (
        <div className="newGameDiv">
            <button onClick={onClick}>New Game</button>
        </div>
    )
}

export default NewGame