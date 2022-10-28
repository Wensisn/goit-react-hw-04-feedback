import css from './Option.module.css';
import PropTypes from 'prop-types';

export const FedbackOptions = ({ options, stepFunc }) => {
  const btnNames = Object.keys(options);
  return (
    <>
      <div className={css.sectionsFedback}>
        {btnNames.map(item => (
          <li key={item} className={css.button}>
            <button
              type="click"
              className={css.button}
              onClick={() => stepFunc(item)}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

FedbackOptions.propTypes = {
  stepFunc: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
