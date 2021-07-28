import React from 'react'

import NewGame from './NewGame'
import QuestionContainer from '../containers/QuestionContainer'
import Score from './Score'

import Data from '../data'

class Game extends React.Component{
    constructor(){
        super()
        this.state = {
            questionsArray: Data.questions,
        }
    }

    handleClick = () => {
        window.location.reload()
    }

    render(){
        return(
            <div>
                <h1>Lutrivia</h1>
                < NewGame onClick={this.handleClick}/>
                < Score score={this.state.score}/>
                < QuestionContainer questions={this.state.questionsArray}/>
            </div>
        )
    }
}

export default Game