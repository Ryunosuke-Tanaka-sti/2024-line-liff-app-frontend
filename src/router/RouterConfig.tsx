import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotfoundPage";
import { TopPage } from "../pages/TopPage";
import { ParentLayout } from "../pages/layouts/ParentLayout";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<ParentLayout />}>
        <Route path="/" index element={<TopPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
