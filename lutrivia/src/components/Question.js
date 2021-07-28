import React from 'react'

class Question extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            question: [this.props.questions.text],
            answer: [this.props.questions.answer],
            selectedAnswer: false,
            score: 0
        }
    }
    handleAnswer = (event) => {
        this.setState({
            selectedAnswer: event.target.value
        })
     }


    render(){
        return (
            <div>
                <form >
                <label>
                    <h3 name='question'>{this.state.question}</h3>
                    <label>
                    <input type='radio' name='trueOrFalse' value='true' onClick={this.props.answer}></input>
                    <span>True</span>
                    </label>
                    <label>
                    <input type='radio'name='trueOrFalse' value='false' onClick={this.props.answer}></input>
                    <span>False</span>
                    </label>
                </label>
                </form>
            </div>
        )}
}

export default Question