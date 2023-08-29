import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnDiv}>
    {options.map((option) => {
      return (
        <button 
        className={css.btn} 
        type="button" 
        key={option}
        name={option}
        onClick={onLeaveFeedback}
      >{option}</button>
      )
    })}
    </div>
  )	
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions