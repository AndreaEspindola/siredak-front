import {useLocation} from "react-router-dom";

const ReportBtn = () => {    
    return(
        <div className="w-full h-fit flex justify-end">
            <button className="w-1/4 h-10 rounded-xl p-2 transition duration-500 delay-75 ease-in-out hover:scale-105 hover:shadow-xl hover:text-white bg-violet">
                Generar Reporte
            </button>
        </div>
    );
}

const Access = () => {
    const {state} = useLocation();
    const date = new Date(state.birthday).toLocaleDateString("en-US");

    return (
        <div className="w-1/2 h-full mx-auto p-2 rounded-md bg-gray-100 mt-10 shadow-xl">
            <p className="ml-8 text-3xl"><span className="text-3xl text-orange-800">Acceso</span>-{state.name} {state.lastName}</p>
            <label className="font-bold ml-8">Apellido</label>
            <p className="ml-8">{state.lastName}</p>
            <label className="font-bold ml-8">Cumpleaños</label>
            <p className="ml-8">{date}</p>
            <label className="font-bold ml-8">Nacionalidad</label>
            <p className="ml-8">{state.nationality}</p>
            <label className="font-bold ml-8">Estado</label>
            <p className="ml-8">{state.state}</p>
            <label className="font-bold ml-8">CURP</label>
            <p className="ml-8">{state.curp}</p>
            <label className="font-bold ml-8">Celular</label>
            <p className="ml-8">{state.cellphone}</p>
            <label className="font-bold ml-8">Correo</label>
            <p className="ml-8">{state.email}</p>
            <label className="font-bold ml-8">Genero</label>
            <p className="ml-8"></p>

            <ReportBtn/>
        </div>
    );
}

export default Access;