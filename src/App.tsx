import "./App.css";
import Landing from "./pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import SignupPage from "./pages/Login/signupPage";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <div>
          <h1>Benedita Receita</h1>
        </div>
      </Header>
      <SpacingContainer></SpacingContainer>

      <SearchBar>
        <div></div>
      </SearchBar>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const Header = styled.div`
  width: 100vw;
  height: 60px;
  h1 {
    font-family: "Passion One", cursive;
  }
  background-color: #ff531c;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const SearchBar = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #ff910f;
  position: fixed;
  top: 60px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const SpacingContainer = styled.div`
  height: 80px;
`;

export default App;
