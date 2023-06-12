import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Categories() {
  // const [hide, setHide] = useState("");

  return (
    <>
      <Container>
        <IconContext.Provider
          value={{
            color: "dark-grey",
            className: "global-class-name",
            size: "75%",
          }}>
          <IoIosSearch></IoIosSearch>
        </IconContext.Provider>
        <div>Doces</div>
        <div>Salgados</div>
        <div>Bebidas</div>

        <div>Carnes</div>
        <div>Snack</div>
        <div>Bolos & Tortas</div>
        <div>Saladas</div>
        <div>Ver todas</div>
      </Container>
      <MoreOptions></MoreOptions>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #ff910f;
  position: fixed;
  top: 60px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      border-style: solid;
      border-color: #96969652;
      border-top: 0;
      border-bottom: 0;
    }
  }
`;

const MoreOptions = styled.div``;
