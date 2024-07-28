import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardActionArea,
  styled,
} from "@mui/material";
import Timer from "./Timer";

const QuestionCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const OptionCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  cursor: "pointer",
  transition: "transform 0.2s, background-color 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "scale(1.02)",
  },
}));

const SelectedOptionCard = styled(OptionCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const QuizTaker = ({ quiz, finishQuiz, initialTimePerQuestion = 30 }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [resetTrigger, setResetTrigger] = useState(0);

  if (!quiz || quiz.length === 0) {
    return <Typography variant="h6">No questions available</Typography>;
  }

  const handleOptionClick = (index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = index;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setResetTrigger(resetTrigger + 1);
    } else {
      finishQuiz(selectedOptions);
    }
  };

  const handleTimeUp = () => {
    handleNextQuestion();
  };

  const currentQuestion = quiz[currentQuestionIndex];

  return (
    <Box>
      <Timer
        timeLimit={initialTimePerQuestion}
        onTimeUp={handleTimeUp}
        resetTrigger={resetTrigger}
      />
      <QuestionCard>
        <Typography variant="h6">{currentQuestion.question}</Typography>
      </QuestionCard>
      {currentQuestion.options.map((option, index) => {
        const OptionComponent =
          selectedOptions[currentQuestionIndex] === index
            ? SelectedOptionCard
            : OptionCard;
        return (
          <OptionComponent key={index} onClick={() => handleOptionClick(index)}>
            <CardActionArea>
              <Typography variant="body1">{option}</Typography>
            </CardActionArea>
          </OptionComponent>
        );
      })}
      <SubmitButton
        variant="contained"
        color="primary"
        onClick={handleNextQuestion}
      >
        {currentQuestionIndex < quiz.length - 1 ? "Next" : "Submit"}
      </SubmitButton>
    </Box>
  );
};

export default QuizTaker;
