
import { useTweets } from './../../hooks/useTweets';
export default function Tweet({tweetData}) {
    const {tweetsAction} = useTweets()
    return (
        <div className="tweet">
            <div className="tweet-text">{tweetData.text}</div>
            <div className="tweet-actions">
                <button onClick={() => tweetsAction({type: 'like', payload: {id: tweetData.id}})}>
                    {tweetData.liked ? 'Unlike' : 'Like'}
                </button>
                <button>Edit</button>
                <button onClick={() => tweetsAction({type: 'remove', payload: {id: tweetData.id}})}>Remove</button>
            </div>
            <div className="tweet-date">
                {tweetData.id !== tweetData.timestamp && 'Edited'} {tweetData.timestamp}
            </div>
        </div>
    )
}