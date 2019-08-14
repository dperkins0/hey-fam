import React, { createContext, useState} from 'react'

const Context = createContext({})

export const FeedProvider = ({ children }) => {
    const [feed, setFeed] = useState()
    return <Context.Provider value={{ feed, setFeed }}>{children}</Context.Provider>
}
export default Context
