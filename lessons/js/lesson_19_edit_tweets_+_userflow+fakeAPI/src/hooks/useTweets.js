import React, { createContext, useContext, useReducer, useEffect } from 'react'

const TweetsContext = createContext()
export const useTweets = () => useContext(TweetsContext)
export default function TweetsProvider({ children }) {
    const [tweets, tweetsAction] = useReducer(tweetsReducer, [])
    useEffect(() => {
        if (!window.localStorage.getItem('tweets')) {
            window.localStorage.setItem('tweets', JSON.stringify([]))
        }
        tweetsAction({type: 'set', payload: JSON.parse(window.localStorage.getItem('tweets'))})
    }, [])

    useEffect(() => {
        window.localStorage.setItem('tweets', JSON.stringify(tweets))
    }, [tweets])

    function tweetsReducer(state, { type, payload }) {
        switch (type) {
            case "set": {
                return [...payload]
            }
            case "create": {
                return [...state, payload]
            }
            case "remove": {
                const tweetIdx = state.findIndex(tweet => tweet.id === payload.id)
                const newArray = [...state]
                newArray.splice(tweetIdx, 1)
                return newArray
            }
            case "like": {
                const tweetIdx = state.findIndex(tweet => tweet.id === payload.id)
                const newArray = [...state]
                newArray[tweetIdx] = { ...state[tweetIdx], liked: !state[tweetIdx].liked }
                return newArray
            }
            case "edit": {
                const tweet = state.find(tweet => tweet.id === payload.id)
                const tweets = state.filter(tweet => tweet.id !== payload.id)
                tweet.text = payload.newText
                tweet.timestamp = payload.newTimestamp
                return [...tweets, tweet]
            }
            default:
                throw new Error('Received wrong action type from dispatch function!')
        }
    }
    return <TweetsContext.Provider value={{ tweets, tweetsAction }}>{children}</TweetsContext.Provider>
}