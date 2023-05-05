import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="w-full h-screen bg-green">
            <Header/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Main;