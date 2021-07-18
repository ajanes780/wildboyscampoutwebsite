import { FooterComponent } from './components/footer/FooterComponent';
import { HeaderComponent } from './components/headerComponent/HeaderComponent';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ContactComponent } from './components/Contact/ContactComponent';
import { StorePage } from './pages/StorePage';
import { HeroComponent } from './components/hero/HeroComponent';

function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderComponent />
        <HeroComponent />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contactme' component={ContactComponent} />
          <Route path='/store' component={StorePage} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
