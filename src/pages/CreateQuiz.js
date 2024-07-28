import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Questions from "../components/Questions";

const CreateQuiz = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const storedQuiz = JSON.parse(localStorage.getItem("quiz"));
    if (storedQuiz) {
      setQuiz(storedQuiz);
    }
  }, []);

  const handleAddQuestion = (question) => {
    const newQuiz = [...quiz, question];
    setQuiz(newQuiz);
    localStorage.setItem("quiz", JSON.stringify(newQuiz));
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" mb={3}>
        Create a Quiz
      </Typography>
      <Questions addQuestion={handleAddQuestion} />
      <Box mt={4}>
        <Typography variant="h5">Quiz Preview</Typography>
        {quiz.map((q, index) => (
          <Box
            key={index}
            my={2}
            p={2}
            border={1}
            borderRadius={2}
            borderColor="grey.400"
          >
            <Typography variant="h6">{q.question}</Typography>
            <ul>
              {q.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CreateQuiz;
