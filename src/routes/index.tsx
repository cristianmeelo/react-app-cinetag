import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/home";
import { Favorites } from "pages/favorites";
import { Footer, Header, Container } from "components";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
