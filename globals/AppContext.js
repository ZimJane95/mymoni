import { createContext,useState } from "react";


const AppContext = createContext();

function AppProvider ({children}){
    // destructuring
    const [email, setEmail] = useState('james@gmail.com');
    const [fullName, setFullName] = useState('James Elvis');
    const [uid, setUid] = useState('');

    return(
        <AppContext.Provider value={{email,setEmail,fullName,setFullName,uid,setUid}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}