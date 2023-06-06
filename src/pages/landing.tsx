import styled, { createGlobalStyle } from "styled-components";

export default function Landing() {
  return (
    <>
      <Header>
        <div>
          <h1>BENEDITA RECEITA</h1>
        </div>
      </Header>
      <GlobalStyles />
    </>
  );
}

const Header = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #ff531c;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #975703;
    }
`;
