import { Btn, BtnSpan } from './FeedbackOptions.styled';
export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <li key={option}>
            <Btn type="button" onClick={() => onLeaveFeedback(option)}>
              <BtnSpan>{option}</BtnSpan>
            </Btn>
          </li>
        );
      })}
    </>
  );
};
