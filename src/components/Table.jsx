import { useContext } from "react";
import { BackContext } from "../context/BackContext";
import { Card, Typography } from "@material-tailwind/react";
import { IconButton, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Loader from "./loaders/Loader";

const TABLE_HEAD = ["ID Usuario", "E-Mail", "Nombre", "Apellido Paterno", "CURP", "Celular", "Nacionalidad", "Estado", "Género", "ARCO"];
const TABLE_ROWS = 0;

const Table = ({data}) => {
    // Este hook es de react-router. Sirve para cambiar la dirección de la barra de navegación.
    // Tiene la sintaxis de: navigate("/Dirección-a-la-que-se-quiere-navegar");
    const navigate = useNavigate();
    const {setActive} = useContext(BackContext);

    const getGender = (gender) => {
        const map = new Map([
            [0, "Mujer"],
            [1, "Hombre"],
            [2, "Otro"]
        ]);

        return map.get(gender);
    }

    const handleRectification = (data) => {
        navigate("/rectification", {state: data});
        setActive(true);
    }

    const handleCancel = async(client) => await fetch(`https://siredak.herokuapp.com/clients/${client}`, {method: "DELETE"});

    return (
        <>
            {data? (
            <Card className="overflow-scroll h-full w-full mt-24">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                            {head}
                            </Typography>
                        </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {data.map(({name, lastName, email, cellphone, nationality, state, curp, gender, id_clients, birthday}, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                    if(!(name === "" || name === null)){
                        return (
                        <tr key={id_clients}>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {id_clients}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {email}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {name}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                   {lastName}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {curp}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {cellphone}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {nationality}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {state}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {getGender(gender)}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Menu placement="right-start">
                                    <MenuHandler>
                                        <IconButton>
                                            <FiChevronDown/>
                                        </IconButton>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem onClick={() => {navigate("/access", {state: {name, lastName, email, cellphone, nationality, state, curp, gender, id_clients, birthday}}); setActive(true)}}>Acceso</MenuItem>
                                        <MenuItem onClick={() => handleRectification({name, lastName, email, cellphone, nationality, state, curp, gender, id_clients, birthday})}>Rectificación</MenuItem>
                                        <MenuItem onClick={() => handleCancel(id_clients)}>Cancelación</MenuItem>
                                        <MenuItem>Oposición</MenuItem>
                                    </MenuList>
                                </Menu>
                            </td>
                        </tr>
                        );
                    }else{
                        return null;
                    }
                })}
                </tbody>
            </table>
            </Card>) 
                : 
            (<Loader/>)}
        </>
    );
}

export default Table;