import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/home";
import { Favorites } from "pages/favorites";
import { Player } from "pages/player";
import { NotFound } from "pages/notFound";
import { BasePage } from "pages/basePage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
