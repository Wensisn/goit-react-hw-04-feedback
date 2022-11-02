import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { useState, useCallback } from 'react';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const saveFeedback = useCallback(grade => {
    setState(prevState => {
      return { ...prevState, [grade]: prevState[grade] + 1 };
    });
  }, []);

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, el) => acc + el, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    if (!good) {
      return 0;
    }
    return ((good * 100) / countTotalFeedback()).toFixed(2);
  };

  const options = state;
  return (
    <>
      (
      <div>
        <Section title="Please leave feedback">
          <FedbackOptions stepFunc={saveFeedback} options={options} />
        </Section>
        <Section title="Statistics">
          <Statistics
            state={state}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    </>
  );
}

export default App;
