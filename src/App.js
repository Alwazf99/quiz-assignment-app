import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";

function App() {
  return (
    <Router>
      <Container sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/take-quiz" element={<TakeQuiz />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
