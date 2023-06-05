import { useState } from "react";
import styled from "styled-components";

export default function Landing() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Diva />
      aaaaaaaaaaa
    </>
  );
}

const Diva = styled.div`
  width: 100px;
  height: 100px;
  background-color: aliceblue;
`;
