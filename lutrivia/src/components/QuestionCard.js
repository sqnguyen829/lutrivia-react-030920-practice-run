import React from 'react'

export default class QuestionCard extends React.Component {

    state = {
        selectedAns: false
    }
    
    selectAns = (e, value) => {
        let right = this.props.question.answer === value
        let color
        
        if (right) {
            color = 'green'
            this.props.increasePoints()
		} else {
            color = 'red'
		}
        e.target.style.backgroundColor = color
        
        this.setState({
            selectedAns: true
        })
    }

    render() {
        console.log("Question card")
        return(
            <div>
                Question
                <p>{this.props.question.text}</p>
                <button onClick = {(e) => this.selectAns(e, true) } disabled={this.state.selectedAns}>
                    True
                </button>
                <button onClick = {(e) => this.selectAns(e, false) } disabled={this.state.selectedAns}>
                    False
                </button>
            </div>
        )
    }
}
