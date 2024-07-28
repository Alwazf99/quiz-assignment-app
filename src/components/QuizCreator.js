import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const QuizCreator = ({ addQuestion }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(0);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion({ question, options, correctOption });
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectOption(0);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={3}>
      <TextField
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        margin="normal"
      />
      {options.map((option, index) => (
        <Box key={index} mt={2}>
          <TextField
            label={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            fullWidth
            margin="normal"
          />
          <RadioGroup
            value={correctOption}
            onChange={() => setCorrectOption(index)}
          >
            <FormControlLabel
              value={index}
              control={<Radio />}
              label="Correct Answer"
            />
          </RadioGroup>
        </Box>
      ))}
      <Button type="submit" variant="contained" color="primary" mt={3}>
        Add Question
      </Button>
    </Box>
  );
};

export default QuizCreator;
