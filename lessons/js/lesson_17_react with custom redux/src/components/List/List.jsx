import React, { useState } from 'react'
import {useCounter} from '../../hooks/useCounter'


export default function List({items, changeItems}) {
    const {counter} = useCounter()
    const [order, setOrder] = useState(1)
    function sort() {
        const sortedItems = [...items]
        sortedItems.sort((a,b) => a.name.localeCompare(b.name) * order)
        changeItems(sortedItems)
        setOrder(order * -1)
    }
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={sort}>Sort</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.name} {counter}</li>)}
            </ul>
        </>
    )
}