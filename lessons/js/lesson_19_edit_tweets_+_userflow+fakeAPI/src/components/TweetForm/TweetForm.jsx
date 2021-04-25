import React, { useState, useEffect } from "react";
import { useTweets } from "./../../hooks/useTweets";
import { useHistory, useParams } from "react-router-dom";

export default function TweetsForm() {
  const { tweetId } = useParams();
  const [tweetText, setTweetText] = useState("");
  const [tweetAuthor, setTweetAuthor] = useState("");
  const history = useHistory();
  const { tweets, tweetsAction } = useTweets();
  useEffect(() => {
    if (tweetId) {
      const tweet = tweets.find((tweet) => tweet.id == tweetId);
      if (tweet) {
        setTweetText(tweet.text);
        setTweetAuthor(tweet.author);
      } else{
        history.push('/404')
      }
    } else{
      setTweetText('');
      setTweetAuthor('');
    }
  }, [tweetId]);
  function saveTweet(e) {
    e.preventDefault();
    const actionTime = Date.now();
    if (tweetId) {
      editTweet(actionTime);
    } else {
      createTweet(actionTime);
    }
    history.push("/");
  }
  function editTweet(actionTime) {
    tweetsAction({ type: "edit", payload: { id: +tweetId, newText: tweetText, newTimestamp: actionTime } });
  }
  function createTweet(actionTime) {
    const newTweet = {
      id: actionTime,
      author: tweetAuthor,
      text: tweetText,
      timestamp: actionTime,
      liked: false,
    };
    tweetsAction({ type: "create", payload: newTweet });
  }
  function cancelTweet(e) {
    history.push("/");
  }
  return (
    <form className="tweet-form" onSubmit={saveTweet}>
      <input
        type="text"
        name="tweetAuthor"
        placeholder="Name"
        value={tweetAuthor}
        readOnly={!!tweetId}
        onChange={(e) => setTweetAuthor(e.target.value)}
      />
      <textarea
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        name="tweetText"
        placeholder="Tweet text"
      ></textarea>
      <div className="tweet-form-actions">
        <button type="reset" onClick={cancelTweet}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
