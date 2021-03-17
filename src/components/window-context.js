import React, {createContext, useState} from 'react';


export const WindowContext = createContext();

export const WindowProvider = (props) => {

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setWindowSize(window.innerWidth)
    })
    console.log(windowSize)

   return(
    <WindowContext.Provider value={[windowSize, setWindowSize]}>
        {props.children}
    </WindowContext.Provider>
   ) 
}