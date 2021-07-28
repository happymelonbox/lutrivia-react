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
            some: 'thing'
        }
    }
    render(){
        return(
            <div>
                < Heading />
                < Score />
                < NewGame />
                < Questions />
                < SubmitScore />
            </div>
        )
    }
}

export default Lutrivia
