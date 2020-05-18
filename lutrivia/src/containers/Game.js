import React, { Component } from 'react';
import NewGame from '../components/NewGame'
import QuestionList from './QuestionList'
import Score from '../components/Score'
class Game extends Component {

    state = {
        questions: [],
        currentQuiz:[],
        points:0,
        key: null
    }

    componentDidMount() {
        fetch('http://localhost:3000/questions')
        .then(res => res.json())
        .then(questions => {
            this.setState({
                questions: questions,
                currentQuiz: this.getFourQuestions(questions)
            })
        })
    }

    getFourQuestions = (questions) => {
        let fourQuestions = []
        //use a while loop if we are checking for repeat question or filter or slice
        for (let i = 0; i < 4; i++) {
            let question = questions[Math.floor(Math.random()*questions.length)]
            fourQuestions.push(question)
        }
        console.log('getFourQuestions')
        return fourQuestions
    }

    newQuiz = (questions) => {
        this.setState({
            currentQuiz: this.getFourQuestions(questions),
            key: Math.random()
        })
        console.log('newQuiz')
    }

    increasePoints = () => {
        this.setState({
            points:this.state.points + 1
        })
        console.log('increasePoints')
    }

    render() {
        console.log("GameComponent")
        return (
            <div>
                <h1>Lutrivia</h1>
                <Score points = { this.state.points }/>
                <NewGame 
                    questions = { this.state.questions }
                    newQuiz = { this.newQuiz }
                />
                <QuestionList 
                    currentQuiz = { this.state.currentQuiz }
                    increasePoints = { this.increasePoints }
                    randomNum  = { this.randomNum }
                    key = {this.state.key}
                />
            </div>
        )
    }
}

export default Game;