import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div>
        <h1>Benedita Receita</h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
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
