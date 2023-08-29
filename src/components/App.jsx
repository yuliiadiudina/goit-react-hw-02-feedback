import React, { Component } from "react";

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good+neutral+bad));
  } 

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);

    return (
      <div       
        style={{
        height: '100vh',
        display: 'block',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        backgroundColor: '#c7cdff'
         }}>
      
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {total ? 
          <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
           /> :
          <Notification message="There is no feedback"></Notification>
          }
          </Section>        

      </div>
    );
  };

}