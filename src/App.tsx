import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBar";
import AllTeams from "./pages/AllTeams";
import TeamDetails from "./pages/TeamDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={AllTeams} />
          <Route path="/teams/:url" exact component={TeamDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
