import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router-dom";

const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default Router;
