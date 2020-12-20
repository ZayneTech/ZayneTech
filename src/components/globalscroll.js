import React, {createContext, useState} from 'react';


export const ScrollContext = createContext();

export const ScrollProvider = (props) => {

    const [scrollPos, setScrollPos] = useState(0);

    window.onscroll = () => (
        setScrollPos(window.pageYOffset)
    ); 

    return(
        <ScrollContext.Provider value={scrollPos}>
            { props.children }
        </ScrollContext.Provider>
    )
}


