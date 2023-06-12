import styled from "styled-components";

export default function Banner() {
  return (
    <>
      <ImageContainer />

      <img
        style={{
          width: "100%",

          bottom: "6%",
          right: "0",
          top: "120px",
          zIndex: "0",
        }}
        src="https://images.wallpaperscraft.com/image/single/lemon_slices_citrus_200198_3840x2160.jpg"
        alt=""
      />
      <ImageContainer />
    </>
  );
}

const ImageContainer = styled.div`
  position: sticky;
`;
