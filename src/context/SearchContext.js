import { createContext } from "react";

export const SearchContext = createContext();

const SearchProvider = (props) => {
    return (
        <SearchContext.Provider>
            {props.children}
        </SearchContext.Provider>
    )
};

export default SearchProvider;