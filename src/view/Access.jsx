import{useState, useEffect} from "react";

const ReportBtn = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        const xd = await fetch("https://siredak.herokuapp.com/clients").
        then(res => res.json()).
        then(res => console.log(res))
        setData(xd);
    }


    return(
        <div className="w-full h-fit flex justify-end">
            <button onClick={onClick} className="w-1/4 h-10 rounded-xl p-2 transition duration-500 delay-75 ease-in-out hover:scale-105 hover:shadow-xl hover:text-white bg-violet">
                Generar Reporte
            </button>
        </div>
    );
}

const Access = ({data}) => {
    return (
        <div className="w-1/2 h-full mx-auto p-2 rounded-md bg-gray-100 mt-10 shadow-xl">
            <p className="ml-8 text-3xl"><span className="text-3xl text-orange-800">Acceso</span>-Chaneke Espejel</p>
            <label className="font-bold ml-8">Apellido</label>
            <p className="ml-8">Espejel</p>
            <label className="font-bold ml-8">Cumpleaños</label>
            <p className="ml-8">hoy</p>
            <label className="font-bold ml-8">Nacionalidad</label>
            <p className="ml-8">Nigeriana</p>
            <label className="font-bold ml-8">Estado</label>
            <p className="ml-8">Solido</p>
            <label className="font-bold ml-8">CURP</label>
            <p className="ml-8">sfgrnsrtbst</p>
            <label className="font-bold ml-8">Celular</label>
            <p className="ml-8">2151325416</p>
            <label className="font-bold ml-8">Correo</label>
            <p className="ml-8">yo@gmial.com</p>
            <label className="font-bold ml-8">Genero</label>
            <p className="ml-8">M</p>

            <ReportBtn/>
        </div>
    );
}

export default Access;