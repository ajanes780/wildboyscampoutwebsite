import "./App.scss";
import { FooterComponent } from "./components/footer/FooterComponent";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { HeroComponent } from "./components/hero/HeroComponent";
import { NewsComponentLeft } from "./components/newComponentLeft/NewsComponentLeft";
import { NewsComponent } from "./components/newsComponent/newsComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HeroComponent />
      <NewsComponent />
      <NewsComponentLeft />
      <FooterComponent />
    </div>
  );
}

export default App;
