import styled from "styled-components";

import Banner from "./components/Banner";
import ImageContainer from "../FeedPage/components/imageContainer";

export default function RecipePage() {
  return (
    <>
      <Container>
        <RecipeContainer>
          <RecipeBlock>
            <HeadDiv>
              <img
                src="https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg"
                alt=""
              />
              <Title>Pao caseiro gostoso Pao caseiro gostoso</Title>
            </HeadDiv>
            <RecipeBody>
              <Description>
                <h2>Sobre a receita:</h2>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Description>
              <h2>Ingredientes:</h2>
              <Ingredients>
                <p>- 1 kg de farinha de trigo</p>
                <p>- 1 e 1/2 xícara de leite morno</p>
                <p>- água 1/2 xícara de água morna</p>
                <p>- óleo 1/2 xícara</p>
                <p>- açúcar 4 colheres de sopa</p>
                <p>- 10 g de fermento biológico</p>
                <p>- sal 1/2 colher de sopa</p>
                <p>- 2 ovos </p>
              </Ingredients>
              <HowTo>
                <h2>Como fazer:</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                blandit sollicitudin mauris, vulputate viverra magna. Nunc
                interdum et velit at egestas. Praesent pellentesque ultrices
                tincidunt. Pellentesque pulvinar dolor nec blandit convallis.
                Donec at luctus sapien, vitae vulputate elit. Aliquam erat
                volutpat. Cras fringilla diam et dolor eleifend commodo. Sed
                malesuada nisl in sem finibus, at dignissim massa interdum. Sed
                consequat risus vel arcu posuere, eget ornare est posuere. Donec
                lacus erat, porta id enim nec, finibus eleifend turpis. Etiam
                ornare, lacus sed pretium imperdiet, lorem erat tempor erat, eu
                porta ligula tortor ac lorem. Aliquam tincidunt, justo nec
                dapibus accumsan, mauris nulla consequat leo, a viverra ipsum
                eros id purus. Vestibulum fringilla, purus nec iaculis dictum,
                nibh turpis rutrum lacus, ac luctus massa eros finibus odio.
                Quisque fermentum arcu a volutpat ultricies. Nam sodales risus
                eget leo scelerisque fermentum. Fusce fermentum ultricies
                pulvinar. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Quisque consectetur
                ornare urna, ut ullamcorper ex sollicitudin eu. Curabitur
                scelerisque orci sit amet orci pretium, in rhoncus nulla semper.
                Praesent at mauris sit amet orci consectetur sollicitudin non
                quis elit. Etiam quis malesuada felis, id dapibus sem.
                Vestibulum sed massa elit. Curabitur rhoncus commodo nisl. Sed
                fermentum augue id diam convallis aliquam. Proin tempor
                vulputate nisi, eu eleifend quam dictum sit amet. Nulla aliquet
                nisl vitae arcu porttitor, ut suscipit justo facilisis. Mauris
                non elit viverra, commodo nisi volutpat, sollicitudin elit.
                Nulla pulvinar vehicula orci ut porta. Fusce nulla diam, posuere
                nec tortor in, molestie mattis orci. Praesent quis sagittis est,
                id laoreet dolor. Nulla sollicitudin ante id nisi egestas,
                dignissim blandit erat ultrices. Sed sagittis pulvinar lectus.
                Suspendisse et lobortis nulla, nec dapibus quam. Maecenas felis
                ex, tempor id turpis sit amet, dignissim gravida arcu. Sed
                scelerisque velit massa, vitae lacinia odio rhoncus vel.
                Suspendisse quis lectus eget urna sollicitudin mollis quis nec
                elit. Vestibulum blandit lectus quis nulla tincidunt, ut
                hendrerit sem lobortis. Sed maximus dui id feugiat egestas.
                Fusce ultricies nisi ut tortor hendrerit fringilla. Proin
                pellentesque diam dapibus mauris ultrices, id fringilla mauris
                faucibus. Suspendisse ac auctor est. Nunc in ex tempor, lobortis
                odio aliquam, finibus augue. Etiam ex leo, dictum id nulla eget,
                cursus feugiat tortor. Curabitur sit amet porttitor nibh. Sed
                sagittis pulvinar elementum. Mauris at magna vitae nunc pulvinar
                tempor. Nam in arcu tristique, pellentesque arcu at, iaculis
                mauris. Donec urna nulla, iaculis id ipsum in, malesuada
                convallis ante. Nam hendrerit dignissim orci dapibus placerat.
                Donec fermentum vitae diam ut convallis. Maecenas sollicitudin
                pulvinar tincidunt. Curabitur mattis neque vehicula dapibus
                pulvinar. Aenean facilisis turpis leo, et auctor ipsum convallis
                vitae. Sed elementum sed lacus sed egestas. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae;
              </HowTo>
            </RecipeBody>
          </RecipeBlock>
        </RecipeContainer>
        <Banner />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  position: fixed;
  right: 0;
  top: 120px;
  z-index: 1;
  height: 100vh;
  font-family: "Ubuntu", sans-serif;
`;

const RecipeBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 80%;
  background-color: #faf6d0;

  padding: 50px;
  box-sizing: border-box;
  flex-direction: column;
`;

const RecipeContainer = styled.div`
  width: 100vw;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 120px;
  color: black;
  background-image: linear-gradient(to bottom, #ba541450, #ba5414);
  z-index: 1;
  height: 100vh;

  font-family: "Ubuntu", sans-serif;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffa600;
    border-radius: 15px;
    min-height: 30px;
    overflow: auto;
    border: 4px solid transparent;
    background-clip: padding-box;
    transition: height 0.2s ease-in-out;
    padding: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #ff990040;
    border: 0px solid transparent;
    box-shadow: none;
  }
`;

const Title = styled.span`
  font-size: 30px;
  width: 50%;
  font-weight: bolder;
  position: relative;
  height: max-content;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  word-wrap: break-word;
  @media screen and (min-width: 800px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 50px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 80px;
  }
`;

const HeadDiv = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  img {
    @media screen and (max-width: 1300px) {
      max-height: 250px;
    }
    @media screen and (max-width: 2000px) {
      max-height: 400px;
    }
    @media screen and (max-width: 2800px) {
      max-height: 600px;
    }
    max-height: 800px;
    position: relative;
    width: 50%;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3),
      -3px 3px 3px 1px rgba(0, 0, 0, 0.3);
  }
`;

const RecipeBody = styled.div`
  margin-top: 2.5vh;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: justify;
`;

const Description = styled.div``;

const Ingredients = styled.div`
  font-weight: 800;
  text-align: start;
  padding-left: 3vw;
`;

const HowTo = styled.div``;
