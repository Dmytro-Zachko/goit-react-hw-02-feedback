import { Component } from "react";

export class Feedback extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    
    OnBad = () => {
    this.setState((PrevState) => ({bad: PrevState.bad + 1}))
    }

    OnGood = () => {
        console.log('sell forze')
      this.setState((PrevState) => ({good: PrevState.good + 1}))      
    }

    OnNeutral = () => {
      this.setState((PrevState) => ({neutral: PrevState.neutral + 1}))  
    }

    countTotalFeedback = () => {
        const TotalVal = Object.values(this.state)
        const TotalFeedBack = TotalVal.reduce((previousValue, number) => {
  return previousValue + number;
        }, 0);
        return TotalFeedBack;
    }
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state
        const PositiveFeedback =  Math.round(
 (good / this.countTotalFeedback()) * 100 
    )
    return PositiveFeedback
    }

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <div>
                <button onClick={this.OnGood}>Good</button>
                <button onClick={this.OnNeutral}>Neutral</button>
                    <button onClick={this.OnBad}>Bad</button>
                </div>
                <h1>Statistics</h1>
                <p>Good: {this.state.good} </p>
                <p>Neutral: {this.state.neutral} </p>
                <p>Bad: {this.state.bad} </p>
                <p>Total: {this.countTotalFeedback()} </p>
                <p>Positive feedback: {this.countPositiveFeedbackPercentage()}% </p>
            </div>
        )
    }
}