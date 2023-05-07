import React, {useContext} from 'react';
import { BackContext } from '../context/BackContext';
import {BiSearch} from "react-icons/bi";

const SearchBar = () => {
    const {searchData, setSearchData} = useContext(BackContext);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const email = e.target.firstChild.value;
        (email !== ""? 
            await fetch(`https://siredak.herokuapp.com/clients/certifications/${email}/0`).
            then(res => res.json()).
            then(({response}) => {setSearchData(response);console.log(searchData," || ", response)}) 
                : 
            await fetch(`https://siredak.herokuapp.com/clients`).
            then(res => res.json()).
            then(({response}) => {setSearchData(response);console.log(searchData," || ", response)}));
    }

    return (
        <div className="w-1/3 h-1/4 ml-10 mt-9 rounded-xl border-2 border-black border-solid flex group transition duration-300 delay-100 ease-in-out hover:scale-x-105 hover:shadow-md">
            <div className="w-fit h-10 p-1 -ml-5 -mt-2 rounded-full bg-[#4c1d95] transition delay-[400ms] duration-300 ease-in-out group-hover:scale-125">
                <BiSearch className="text-[35px] text-white"/>
            </div>
            <form
                classNAme="w-full h-fit"
                onSubmit={handleSubmit}
            >
                <input type="text" placeholder="Busqueda" className="w-full h-full ml-4"/>
            </form>
        </div>
    );
}

export default SearchBar;