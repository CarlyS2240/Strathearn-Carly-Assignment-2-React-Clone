import logo from './logo.svg';
import './App.css';

//importing react router so we can have multiple pages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/navbar/index';
import { Header} from './components/header/index';
import { ArtificialPlantPage} from './components/pages/artificial-plants/index';
import { LoginPage} from './components/pages/login/index';


function App() {
  return (
    <div className="App">
      <Router>
        <Header
          firstMessage="We're experiencing supply issues"
          secondMessage="Join IKEA family for free | get member-only discounts, benefits and more"
          thirdMessage="Personalized planning services">
        </Header>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/ArtificialPlantPage">
            <ArtificialPlantPage></ArtificialPlantPage>
          </Route>
          <Route exact path="/LoginPage">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
