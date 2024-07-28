import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import QuizTaker from "../components/QuizTaker";
import QuizResult from "../components/QuizResult";

const TakeQuiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const storedQuiz = JSON.parse(localStorage.getItem("quiz"));
    if (storedQuiz) {
      setQuiz(storedQuiz);
    }
  }, []);

  const handleFinishQuiz = (answers) => {
    setUserAnswers(answers);
    const calculatedScore = answers.reduce((acc, answer, index) => {
      return acc + (answer === quiz[index].correctOption ? 1 : 0);
    }, 0);
    setScore(calculatedScore);
  };

  if (quiz.length === 0) {
    return (
      <Box mt={5}>
        <Typography variant="h4" mb={3}>
          No Quiz Available
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={5}>
      <Typography variant="h4" mb={3}>
        Take a Quiz
      </Typography>
      {score === null ? (
        <QuizTaker quiz={quiz} finishQuiz={handleFinishQuiz} />
      ) : (
        <QuizResult quiz={quiz} userAnswers={userAnswers} score={score} />
      )}
    </Box>
  );
};

export default TakeQuiz;
