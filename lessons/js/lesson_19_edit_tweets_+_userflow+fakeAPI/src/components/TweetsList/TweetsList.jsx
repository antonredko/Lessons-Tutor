
import Tweet from './../Tweet/Tweet';


export default function TweetsList({tweetsData}) {
    return (
        <>
            {tweetsData?.map(tweet => <Tweet key={tweet.id} tweetData={tweet}/>)}
        </>
    )
}