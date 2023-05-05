import React from 'react';
import {BiSearch} from "react-icons/bi";

const SearchBar = () => {
    return (
        <div className="w-1/3 h-1/4 ml-10 mt-9 rounded-xl border-2 border-black border-solid flex group transition duration-300 delay-100 ease-in-out hover:scale-x-105 hover:shadow-md">
            <div className="w-fit h-10 p-1 -ml-5 -mt-2 rounded-full bg-[#4c1d95] transition delay-[400ms] duration-300 ease-in-out group-hover:scale-125">
                <BiSearch className="text-[35px] text-white"/>
            </div>
            <input type="text" placeholder="Busqueda" required className="w-full ml-4"/>
        </div>
    );
}

export default SearchBar;