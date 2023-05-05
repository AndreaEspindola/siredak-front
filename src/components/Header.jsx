import React from "react";
import SearchBar from "./SearchBar";
import Img from "../assets/kueski.png";

const Header = () => {
    return (
        <div className="bg-white w-full h-32 flex">
            <img alt="Logo" src={Img} className=" w-1/3"/>
            <SearchBar/>
        </div>
    );
}

export default Header;