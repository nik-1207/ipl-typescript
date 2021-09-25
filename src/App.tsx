import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { lazy, Suspense } from "react";
import "./App.css";
import CustomLoader from "./components/CustomLoader";
import Navbar from "./components/NavBar";
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
