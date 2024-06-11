// QuestionReview.js
import React from 'react';

const QuestionReview = ({
  question,
  selectedOptions,
  handleOptionChange,
  isReviewMode = false
}) => {
  return (
    <div className="question-container">
      <h5>{question.questionNo}. {question.question}</h5>
      <ul>
        {question.options.map((option, optionIndex) => (
          <li key={optionIndex}>
            <input
              type={
                question.questionType === 'MCQ' ||
                question.questionType === 'TF' ||
                question.questionType === 'T/F'
                  ? 'radio'
                  : 'checkbox'
              }
              name={question.quizQuestionId}
              value={option.option}
              checked={
                selectedOptions[question.quizQuestionId]?.includes(option.option) || false
              }
              onChange={() => !isReviewMode && handleOptionChange(
                question.quizQuestionId,
                option.option,
                question.questionType === 'MSQ'
              )}
              readOnly={isReviewMode}
            />
            {option.option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionReview;
