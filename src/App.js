import "./App.scss";
import { FooterComponent } from "./components/footer/FooterComponent";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactComponent } from "./components/Contact/ContactComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contactme" component={ContactComponent} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
