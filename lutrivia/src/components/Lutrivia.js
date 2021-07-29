import React from 'react'

import Heading from './Heading'
import Score from './Score'
import NewGame from './NewGame'
import Questions from '../containers/Questions'
import SubmitScore from './SubmitScore'

class Lutrivia extends React.Component {
    constructor(){
        super()
        this.state={
            score: 0
        }
        this.handleScore = this.handleScore.bind(this)
    }
    handleNewGame = () => {
        window.location.reload()
    }
    scoreIncrement = () => {
        let increment = this.state.score + 1
        this.setState({
            score: increment
        })
    }
    handleScore = (result) => {
        console.log(result)
        return result === 'win' ? this.scoreIncrement() : this.state.score
    }

    

    render(){
        return(
            <div>
                < Heading />
                < Score score={this.state.score} />
                < NewGame onClick={this.handleNewGame}/>
                < Questions handleScore={this.handleScore}/>
                < SubmitScore />
            </div>
        )
    }
}

export default Lutrivia
