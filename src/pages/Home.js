import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import quizImage from "../assets/quizImage.jpeg";

const HomeContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(5),
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#2c3e50",
  padding: theme.spacing(3),
}));

const QuizImage = styled("img")(({ theme }) => ({
  width: "300px",
  height: "300px",
  marginBottom: theme.spacing(2),
  borderRadius: "10px",
}));

const Home = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <HomeContainer>
      <QuizImage src={quizImage} alt="Quiz" />
      <Typography variant={isMobile ? "h4" : "h3"} gutterBottom>
        Online Quiz Platform
      </Typography>
      <Typography variant="h6" gutterBottom>
        Challenge yourself with fun and exciting quizzes!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Test your knowledge, learn something new, and have fun.
      </Typography>
      <Box mt={3}>
        <Button
          component={Link}
          to="/create-quiz"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          Create a Quiz
        </Button>
        <Button
          component={Link}
          to="/take-quiz"
          variant="contained"
          color="secondary"
        >
          Take a Quiz
        </Button>
      </Box>
    </HomeContainer>
  );
};

export default Home;
