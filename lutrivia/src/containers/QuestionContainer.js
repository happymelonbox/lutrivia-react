import React from 'react'

import Question from '../components/Question'

const QuestionContainer = ({questions, setAnswer, answer}) => {
    const randomQuestion = () => {
        const randomQuestions = questions[Math.floor(Math.random()*questions.length)]
        console.log(randomQuestions)
        return randomQuestions
    }
    return(
        <div>
            < Question questions={randomQuestion()} setAnswer={setAnswer} answer={answer}/>
            < Question questions={randomQuestion()} setAnswer={setAnswer} answer={answer}/>
            < Question questions={randomQuestion()} setAnswer={setAnswer} answer={answer}/>
            < Question questions={randomQuestion()} setAnswer={setAnswer} answer={answer}/>
            < Question questions={randomQuestion()} setAnswer={setAnswer} answer={answer}/>
            < Question questions={randomQuestion()} setAnswer={setAnswer} answer={answer}/>
            < Question questions={randomQuestion()} setAnswer={setAnswer} answer={answer}/>
            < Question questions={randomQuestion()} setAnswer={setAnswer} answer={answer}/>
        </div>
    )
}

export default QuestionContainer