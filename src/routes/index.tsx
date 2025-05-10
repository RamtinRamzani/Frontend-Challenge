import Home from "@/components/home";
import Jonior from "@/components/jonior";
import AgeCalculator from "@/components/jonior/age-calcualtor";
import BaseApparel from "@/components/jonior/BaseApparel";
import ContactForm from "@/components/jonior/contact-form";
import FaqAccordion from "@/components/jonior/FaqAccordion";
import AppLayOut from "@/components/ui/AppLayOut";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayOut />}>
        <Route index element={<Home />} />
        <Route path="nowb" element={<Jonior />}>
          <Route path="base-apparel" element={<BaseApparel />} />
          <Route path="faq-accordion" element={<FaqAccordion />} />
          <Route path="age-calculator" element={<AgeCalculator />} />
          <Route path="contact-form" element={<ContactForm />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
