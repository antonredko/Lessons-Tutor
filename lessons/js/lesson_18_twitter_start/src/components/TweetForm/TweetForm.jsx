import React, { useState } from "react";
import { useTweets } from "./../../hooks/useTweets";
import { useHistory } from "react-router-dom";

export default function TweetsForm() {
  const [tweetText, setTweetText] = useState("");
  const history = useHistory();
  const { tweetsAction } = useTweets();
  function saveTweet(e) {
    e.preventDefault();
    const createTime = Date.now();
    const newTweet = {
      id: createTime,
      text: tweetText,
      timestamp: createTime,
      liked: false,
    };
    tweetsAction({ type: "create", payload: newTweet });
    setTweetText("");
    history.push("/");
  }
  function cancelTweet(e) {
    setTweetText("");
    history.push("/");
  }
  return (
    <form onSubmit={saveTweet}>
      <textarea
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        name="tweetText"
        placeholder="Tweet text"
      ></textarea>
      <button type="reset" onClick={cancelTweet}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
}
