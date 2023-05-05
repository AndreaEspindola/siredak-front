import React, {useState, useEffect} from 'react'

const useFetch = (URL, type, params) => {
    const [data, setData] = useState(null);

    const dataFetch = async() => {
        if(!type || !params){
            await fetch(URL).
            then(res => res.json()).
            then(data => console.log(data)).
            then(data => setData(data));
        }
    }

    useEffect(() => {
        dataFetch();
    }, []);


    return data;
}

export default useFetch;