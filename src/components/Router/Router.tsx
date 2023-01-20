import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<></>} />
    </Routes>
  );
};

export default Router;
