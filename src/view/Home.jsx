import React, {useEffect, useContext} from 'react';
import { BackContext } from '../context/BackContext';
import Table from '../components/Table';

const Home = () => {
    // Este es un hook que regresa dos valores, una variable y una función setter para cambiar
    // el valor de la variable. En cuanto el valor de la variable cambia el componente se va a
    // reenderizar.

    const {searchData, setSearchData} = useContext(BackContext);

    useEffect(() => {
        const fetchData = async() => {
            await fetch("https://siredak.herokuapp.com/clients").
            then(res => res.json()).
            then(res => setSearchData(res.response));
        }

        fetchData();
    }, []);

    return (
        <div className="w-full h-full">
            <Table data={searchData}/>
        </div>
    );
}

export default Home;