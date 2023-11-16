import Footer from "./components/Footer";
import MainPageSlideShow from "./components/MainPageSlideShow";
import NavMenu from "./components/NavMenu";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doula from "./components/Doula";
import About from "./components/About";
import PostpartumDoula from "./components/PostpartumDoula";
import Support from "./components/Support";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavMenu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPageSlideShow />
              <Services />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/doula" element={<Doula />} />
        <Route path="/postpartum-doula" element={<PostpartumDoula />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
