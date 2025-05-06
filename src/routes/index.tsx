import Home from "@/components/home";
import Jonior from "@/components/jonior";
import BaseApparel from "@/components/jonior/BaseApparel";
import FaqAccordion from "@/components/jonior/FaqAccordion";
import SocialLinks from "@/components/jonior/SocialLinks";
import Test from "@/components/test/Test";
import AppLayOut from "@/components/ui/AppLayOut";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayOut />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="nowb" element={<Jonior />}>
          <Route path="base-apparel" element={<BaseApparel />} />
          <Route path="faq-accordion" element={<FaqAccordion />} />
          <Route path="social-links" element={<SocialLinks />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
