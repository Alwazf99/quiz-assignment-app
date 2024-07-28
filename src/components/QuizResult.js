import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  styled,
} from "@mui/material";

const ResultCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
}));

const ResultSummary = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const QuizResult = ({ quiz, userAnswers, score }) => {
  const totalQuestions = quiz.length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === quiz[index].correctOption
  ).length;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const accuracy = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  const getRemarks = () => {
    if (accuracy === 100) {
      return "Excellent! Perfect Score!";
    } else if (accuracy >= 80) {
      return "Great job! You have a good grasp of the material.";
    } else if (accuracy >= 50) {
      return "Not bad, but there’s room for improvement.";
    } else {
      return "Needs improvement. Consider reviewing the material.";
    }
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" mb={3} align="center">
        Quiz Results
      </Typography>
      <ResultCard>
        <ResultSummary>
          <Typography variant="h5" color="black" gutterBottom>
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" align="center" color="black">
                Score
              </Typography>
              <Typography variant="h4" align="center" color="secondary">
                {score} / {totalQuestions}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" align="center" color="black">
                Correct
              </Typography>
              <Typography variant="h4" align="center" color="success.main">
                {correctAnswers}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" align="center" color="black">
                Incorrect
              </Typography>
              <Typography variant="h4" align="center" color="error.main">
                {incorrectAnswers}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" align="center" color="black">
                Accuracy
              </Typography>
              <Typography variant="h4" align="center" color="primary">
                {accuracy}%
              </Typography>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Typography variant="h6" align="center" color="black">
              Remarks
            </Typography>
            <Typography variant="h5" align="center" color="black">
              {getRemarks()}
            </Typography>
          </Box>
        </ResultSummary>
      </ResultCard>
      <Typography variant="h5" mt={3} align="center">
        Detailed Answers:
      </Typography>
      {quiz.map((question, index) => (
        <ResultCard key={index}>
          <CardContent>
            <Typography variant="h6">{question.question}</Typography>
            <Typography variant="body1">
              Your Answer: {question.options[userAnswers[index]]}
            </Typography>
            <Typography
              variant="body1"
              style={{
                color:
                  userAnswers[index] === question.correctOption
                    ? "green"
                    : "red",
              }}
            >
              Correct Answer: {question.options[question.correctOption]}
            </Typography>
          </CardContent>
        </ResultCard>
      ))}
    </Box>
  );
};

export default QuizResult;
