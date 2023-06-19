import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Link to={"/nova-receita/"}>
        <span>+</span>
      </Link>
      <Link to={"/"}>
        <div>
          <h1>Benedita Receita</h1>
        </div>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 60px;
  h1 {
    font-family: "Passion One", cursive;
  }
  a:visited {
    color: #fff6e2;
  }
  user-select: none;
  background-color: #ff531c;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  @media (max-width: 400px) {
    h1 {
      font-size: 2.5em;
    }
  }
  span {
    a:visited {
      color: #000000;
    }
    a {
      color: #000000;
    }
    color: #8a5e01;
    position: fixed;
    top: 18px;
    border-radius: 25px;
    width: 25px;
    background-color: #ffbb00;
    left: 4%;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;
