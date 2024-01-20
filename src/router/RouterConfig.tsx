import { NotFoundPage } from "@pages/NotfoundPage";
import { TopPage } from "@pages/TopPage";
import { ParentLayout } from "@pages/layouts/ParentLayout";
import { Route, Routes } from "react-router-dom";

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
