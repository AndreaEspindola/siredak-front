import React from "react";
import SearchBar from "./SearchBar";
import Img from "../assets/kueski.png";
import { IconButton, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { FiMenu } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";

const Header = () => {
    return (
        <div className="bg-white w-full h-32 flex">
            <img alt="Logo" src={Img} className="w-1/4"/>
            <SearchBar/>
            <Menu>
                <MenuHandler>
                    <IconButton size="md" className="ml-4 mt-8 shadow-gray-600 bg-green-tupper transition delay-100 duration-400 ease-in-out hover:scale-110 hover:shadow-gray-600">
                        <FiMenu className="text-xl"/>
                    </IconButton>
                </MenuHandler>
                <MenuList>
                    <MenuItem>E-mail</MenuItem>
                    <MenuItem>Celular</MenuItem>
                    <MenuItem>CURP</MenuItem>
                </MenuList>
            </Menu>
            <HiUserCircle className=" ml-72 text-6xl text-indigo-900 transition delay-75 duration-300 ease-in-out hover:scale-125"/>
        </div>
    );
}

export default Header;