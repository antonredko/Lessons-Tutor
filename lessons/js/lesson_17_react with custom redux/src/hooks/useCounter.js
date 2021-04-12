import React, { createContext, useContext, useReducer, useEffect } from 'react'


const CounterContext = createContext()
export const useCounter = () => useContext(CounterContext)
export default function CounterProvider({ children }) {
    const [counter, counterAction] = useReducer(counterReducer, 0)

    useEffect(() => {
        (async function (url) {
            const data = await fetch(url).then(r => r.json())
            counterAction({type: 'set', payload: data.length})
        })('https://jsonplaceholder.typicode.com/users')
      }, [])

    function counterReducer(state, {type, payload}) {
        switch (type) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'addAmount':
                return state + payload
            case 'set':
                return payload
            default:
                throw new Error('Received wrong action type from dispatch function!')
        }
    }
    return <CounterContext.Provider value={{counter, counterAction}}>{children}</CounterContext.Provider>
}