import Footer from "./components/Footer";
import MainPageSlideShow from "./components/MainPageSlideShow";
import NavMenu from "./components/NavMenu";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doula from "./components/Doula";
import About from "./components/About";
import PostpartumDoula from "./components/PostpartumDoula";
import Therapy from "./components/Therapy";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/therapy" element={<Therapy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
