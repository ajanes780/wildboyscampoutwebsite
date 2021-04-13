import "./App.scss";
import { FooterComponent } from "./components/footer/FooterComponent";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactComponent } from "./components/Contact/ContactComponent";
import { StorePage } from "./pages/StorePage";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contactme" component={ContactComponent} />
          <Route exact path="/store" component={StorePage} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
