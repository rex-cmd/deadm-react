import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import GiftsPage from "./pages/giftspage/giftspage.component";
import InvitationsPage from "./pages/invitationspage/invitationspage.component";
import UsersPage from "./pages/userspage/userspage.component";
const history = createBrowserHistory();
function App({ currentUser }) {
  // useEffect(() => {
  //   checkUserSession();
  // }, [checkUserSession]);

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/giftspage" component={GiftsPage} />
        <Route path="/userspage" component={UsersPage} />
        <Route path="/invitationspage" component={InvitationsPage} />
        {/* <Route path="/Edit Profile" component={UserPage} /> */}
        {/* <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        /> */}
      </Switch>
    </Router>
  );
}

export default App;
