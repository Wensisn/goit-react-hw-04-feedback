import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  const total = countTotalFeedback();

  return (
    <>
      {!!total ? (
        <>
          <ul className={css.sectionsResults}>
            {Object.keys(state).map(item => (
              <li key={item} className={css.result}>
                <span>{`${item[0].toUpperCase() + item.slice(1)}: ${
                  state[item]
                }`}</span>
              </li>
            ))}
          </ul>
          <p className={css.result}>Total: {countTotalFeedback()}</p>
          <p className={css.result}>
            Positive feedback: {countPositiveFeedbackPercentage()}%
          </p>
        </>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </>
  );
};

Statistics.propTypes = {
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  state: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
};
