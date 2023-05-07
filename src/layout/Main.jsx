import React, {useContext} from 'react';
import Header from '../components/Header';
import BackBtn from '../components/BackBtn';
import { Outlet } from 'react-router-dom';
import { BackContext } from '../context/BackContext';

const Main = () => {
    const {active} = useContext(BackContext);

    return (
        <div className="w-full h-fit bg-green">
            <Header/>
            {active ? (<BackBtn/>) : null}
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Main;