import { createContext, useContext, useState } from "react";

export const FormItemsContext = createContext({});

export const FormItemsContextProvider = ({children}) => {
    const [formItems, setFormItems] = useState([]);
    return (
        <FormItemsContext.Provider value={{formItems, setFormItems}}>{children}</FormItemsContext.Provider>
    );
};