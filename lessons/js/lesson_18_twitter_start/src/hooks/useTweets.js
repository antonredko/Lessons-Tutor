import React, { createContext, useContext, useReducer } from 'react'


const TweetsContext = createContext()
export const useTweets = () => useContext(TweetsContext)
export default function TweetsProvider({ children }) {
    const [tweets, tweetsAction] = useReducer(tweetsReducer, [])

      function tweetsReducer(state, {type, payload}) {
        switch (type) {
            case "create" : {
                return [...state, payload]
            }
            case "remove" : {
                const tweetIdx = state.findIndex(tweet => tweet.id === payload.id)
                const newArray = [...state]
                newArray.splice(tweetIdx,1)
                return newArray
            }
            case "like" : {
                const tweetIdx = state.findIndex(tweet => tweet.id === payload.id)
                const newArray = [...state]
                newArray[tweetIdx] = {...state[tweetIdx], liked: !state[tweetIdx].liked}
                return newArray
            }
            default:
                throw new Error('Received wrong action type from dispatch function!')
        }
    }
    return <TweetsContext.Provider value={{tweets, tweetsAction}}>{children}</TweetsContext.Provider>
}