import React, {useContext} from 'react';
import { BackContext } from '../context/BackContext';
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const {setActive} = useContext(BackContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setActive(prev => !prev);
        navigate("..");
    }

    return (
        <div className="w-full h-fit flex -ml-10 mt-5 justify-end">
            <button
                onClick={handleSubmit}
                className="w-20 h-16 text-2xl rounded-2xl transition duration-500 delay-75 ease-in-out hover:scale-110 hover:shadow-xl hover:text-white bg-violet"><FiArrowLeft className="mx-auto"/>
            </button>
        </div>
    );
}

export default BackBtn;