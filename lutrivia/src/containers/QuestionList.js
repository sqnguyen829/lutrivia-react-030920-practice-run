import React from 'react'
import QuestionCard from '../components/QuestionCard'

const QuestionList = (props) => (
    <div>
        List is Questions
        
        {props.currentQuiz.map( question => <QuestionCard 
                                                question = { question }
                                                increasePoints = {props.increasePoints}
                                                //some weird thing happening with key therefore we needed a random key 
                                                //value and the questions text as a key to reset the true/falue value
                                                key = { props.key + question.text }
                                            />)}
    </div>
)
export default QuestionList