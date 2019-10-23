import React, {createContext, useState} from 'react';

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [newemail, saveemail] = useState("")

    return (
        <StateContext.Provider value={{ newemail, saveemail }}>
            {props.children}
        </StateContext.Provider>
    )
};