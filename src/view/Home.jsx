import React, {useState, useEffect} from 'react';
import Table from '../components/Table';

const Home = () => {
    // Este es un hook que regresa dos valores, una variable y una función setter para cambiar
    // el valor de la variable. En cuanto el valor de la variable cambia el componente se va a
    // reenderizar.
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            await fetch("https://siredak.herokuapp.com/clients").
            then(res => res.json()).
            then(res => setData(res.response));
        }

        fetchData();
    }, []);

    return (
        <div className="w-full h-full">
            <Table data={data}/>
        </div>
    );
}

export default Home;