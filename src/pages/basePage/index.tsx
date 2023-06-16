import { Container, Footer, Header } from "components";
import { AppProvider } from "context";
import { Outlet } from "react-router-dom";

export const BasePage = () => {
  return (
    <main>
      <Header />
      <AppProvider>
        <Container>
          <Outlet />
        </Container>
      </AppProvider>
      <Footer />
    </main>
  );
};
