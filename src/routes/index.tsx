import Landing from "@/components/landing/Landing";
import AppLayOut from "@/components/ui/AppLayOut";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayOut />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
