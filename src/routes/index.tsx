import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "context";
import { Home } from "pages/home";
import { Favorites } from "pages/favorites";
import { Player } from "pages/player";
import { Footer, Header, Container } from "components";
import { NotFound } from "pages/notFound";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/:id" element={<Player />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
