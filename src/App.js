import "./App.scss";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { HeroComponent } from "./components/hero/HeroComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HeroComponent />
    </div>
  );
}

export default App;
