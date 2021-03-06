import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBar";
import { Suspense, lazy } from "react";
import CustomLoader from "./components/CustomLoader";
const AllTeams = lazy(() => import("./pages/AllTeams"));
const TeamDetails = lazy(() => import("./pages/TeamDetails"));
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Suspense fallback={<CustomLoader />}>
          <Switch>
            <Route path="/" exact={true} component={AllTeams} />
            <Route path="/teams/:url" exact={true} component={TeamDetails} />
            <Route>
              <h1>Not Found</h1>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
