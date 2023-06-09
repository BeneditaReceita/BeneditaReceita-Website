import { ImageDiv } from "./styles";

type imageProps = {
  size?: string;
  image: string;
};

export default function ImageContainer(prop: imageProps) {
  const { size } = prop;
  return (
    <>
      <ImageDiv>
        <img style={{ width: size }} src={prop.image} />
      </ImageDiv>
    </>
  );
}
