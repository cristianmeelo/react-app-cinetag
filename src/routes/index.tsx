import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/home";
import { Favorites } from "pages/favorites";
import { Footer, Header, Container } from "components";
import { AppProvider } from "context";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </AppProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
