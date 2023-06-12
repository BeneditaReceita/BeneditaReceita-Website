import "./App.css";
import Landing from "./pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import SignupPage from "./pages/Login/signupPage";
import styled from "styled-components";
import Header from "./commonAssets/components/Header";
import Categories from "./commonAssets/components/Categories";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SpacingContainer></SpacingContainer>

      <Categories />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

const SpacingContainer = styled.div`
  height: 80px;
`;

export default App;
