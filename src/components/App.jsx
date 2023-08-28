import { NotificationMessage } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyled';
import { useState } from 'react';
import { Feedback } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <Feedback
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys({ good, neutral, bad })}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <NotificationMessage />
        ) : (
          <Statistics
            Good={good}
            Neutral={neutral}
            Bad={bad}
            Total={countTotalFeedback()}
            Percentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
};
