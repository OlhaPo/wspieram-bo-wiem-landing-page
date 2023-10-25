import Contacts from "./components/Contacts";
import MainPageSlideShow from "./components/MainPageSlideShow";
import NavMenu from "./components/NavMenu";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div>
      <NavMenu />
      <MainPageSlideShow />
      <Reviews />
      <Contacts />
    </div>
  );
}

export default App;
