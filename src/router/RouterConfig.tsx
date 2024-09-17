import { DummyPage } from "@pages/DummyPage";
import { EnemyPromptPage } from "@pages/EnemyPromptPage";
import { ParentLayout } from "@pages/layouts/ParentLayout";
import { NotFoundPage } from "@pages/NotfoundPage";
import { TopPage } from "@pages/TopPage";
import { Route, Routes } from "react-router-dom";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<ParentLayout />}>
        <Route path="/" index element={<TopPage />} />
      </Route>
      <Route path="dummy" element={<DummyPage />} />
      <Route path="enemy" element={<EnemyPromptPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
