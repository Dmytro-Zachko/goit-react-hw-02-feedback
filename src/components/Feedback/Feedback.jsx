import { Component } from "react";
import { Section } from "components/Section/Section";
import { Statistic } from "components/Statistics/Statistic";
import { Notification } from "components/Notification/Notification";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export class Feedback extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

    HandleBtnClick = event => {
        const value = event.target.value
        this.setState(PrevState => {
         return {[value]: PrevState[value] + 1}
        
     })   
    }
    
    // OnBad = () => {
    // this.setState((PrevState) => ({bad: PrevState.bad + 1}))
    // }

    // OnGood = () => {
    //     console.log('sell forze')
    //   this.setState((PrevState) => ({good: PrevState.good + 1}))      
    // }

    // OnNeutral = () => {
    //   this.setState((PrevState) => ({neutral: PrevState.neutral + 1}))  
    // }

    countTotalFeedback = () => {
        const TotalVal = Object.values(this.state)
        const TotalValFd = TotalVal.length
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
          <>
          <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                    onLeaveFeedback={this.HandleBtnClick}/>  
            </Section>
            
                {this.countTotalFeedback() > 0 ? (
                    <Section title="Statistics">
                    <Statistic
                        good={this.state.good}
                        bad={this.state.bad}
                        neutral={this.state.neutral}
                        total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}    
                    />
                    </Section> ) : (<Notification
                    message={'No feedback given'}
                />)}
            </>
        )
    }
}