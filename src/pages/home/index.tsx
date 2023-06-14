import { Footer, Header, Title, Banner } from "components";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner image={"home"} />
      <Title>
        <h1>Um lugar para salvar seus vídeos e filmes</h1>
      </Title>
      <Footer />
    </>
  );
};
