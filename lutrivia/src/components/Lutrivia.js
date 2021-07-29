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
            score: 0,
            records: {}
        }
        this.handleScore = this.handleScore.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        return result === 'win' ? this.scoreIncrement() : this.state.score
    }

    handleSubmit = (value) => {
        const score = this.state.score
        const keyName = value
        this.setState({
            records: {[keyName]: score}
        })
    }

    render(){
        return(
            <div>
                < Heading />
                < Score score={this.state.score} />
                < NewGame onClick={this.handleNewGame}/>
                < Questions handleScore={this.handleScore}/>
                < SubmitScore handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default Lutrivia
