import { Footer, Header, Title, Banner } from "components";
import { Card } from "components/Card";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner image={"home"} />
      <Title>
        <h1>Um lugar para salvar seus vídeos e filmes</h1>
      </Title>
      <Card id="1" title="gato" cover="https://thecatapi.com/api/images/get?format-src&type=png" />
      <Footer />
    </>
  );
};
