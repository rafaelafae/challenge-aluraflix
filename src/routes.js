import { BrowserRouter, Route, Routes } from "react-router-dom"
import Player from "pages/Player";
import HomePage from "pages/HomePage";
import FrontPage from "pages/FrontPage";
import NewVideo from "pages/NewVideo";
import NotFound from "pages/NotFound";

const AppRoutes = function () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<FrontPage />} />
          <Route path="addvideo" element={<NewVideo />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;