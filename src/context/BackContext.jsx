import {useState, createContext} from "react";

// Create Context
export const BackContext = createContext();

// Context Provider
// Este es el proveedor de nuestro context. Como el nombre lo indica, provee de datos a los
// componentes hijos. Los datos que se desean pasar a los hijos se ponen en el prop de values.
export const BackProvider = ({children}) => {
    const [active, setActive] = useState(false);
    const [searchData, setSearchData] = useState(null);

    return(
        <BackContext.Provider value={{active, searchData, setActive, setSearchData}}>
            {children}
        </BackContext.Provider>
    );
}