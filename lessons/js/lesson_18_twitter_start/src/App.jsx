import "./App.css";
import TweetsList from "./components/TweetsList/TweetsList";
import TweetsForm from "./components/TweetForm/TweetForm";
import { useTweets } from "./hooks/useTweets";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const { tweets } = useTweets();
  useEffect(() => {
    console.log(tweets);
  }, [tweets]);
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add tweet</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/liked">
            <h1>Liked tweets</h1>
            <TweetsList tweetsData={tweets} />
          </Route>
          <Route path="/add">
            <h1>Add new tweet</h1>
            <TweetsForm />
          </Route>
          <Route path="/">
            <h1>Simple twitter</h1>
            <TweetsList tweetsData={tweets} />
          </Route>
        </Switch>

        <div>list liked</div>
        <div>edit form</div>
      </div>
    </Router>
  );
}

export default App;
