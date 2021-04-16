import "./App.scss";
import { FooterComponent } from "./components/footer/FooterComponent";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactComponent } from "./components/Contact/ContactComponent";
import { StorePage } from "./pages/StorePage";
import { FriendsOfTWBCO } from "./pages/FriendsOfTWBCO";
import { HeroComponent } from "./components/hero/HeroComponent";
import { LifeSentenceCycles } from "./pages/LifeSentenceCycles";
import { ElNiven } from "./pages/elniven";
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <HeroComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contactme" component={ContactComponent} />
          <Route path="/store" component={StorePage} />
          <Route path="/friendsofTWBCO" component={FriendsOfTWBCO} />
          <Route path="/lifesentencecycles" component={LifeSentenceCycles} />
          <Route path="/elniven" component={ElNiven} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
