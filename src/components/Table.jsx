import { useState, useContext } from "react";
import { BackContext } from "../context/BackContext";
import { Card, Typography } from "@material-tailwind/react";
import { IconButton, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["ID Usuario", "E-Mail", "Nombre", "Apellido Paterno", "CURP", "RFC", "ARCO"];
const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];
 
const Table = ({datas}) => {
    // Este es un hook que regresa dos valores, una variable y una función setter para cambiar
    // el valor de la variable. En cuanto el valor de la variable cambia el componente se va a
    // reenderizar.
    const [data, setData] = useState(datas);
    // Este hook es de react-router. Sirve para cambiar la dirección de la barra de navegación.
    // Tiene la sintaxis de: navigate("/Dirección-a-la-que-se-quiere-navegar");
    const navigate = useNavigate();
    // 
    const {setActive} = useContext(BackContext);

    return (
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
                {/* Desestructurar los datos que me mande renet y asignarlos a cada campo */}
            {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
    
                return (
                <tr key={name}>
                    <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            ID Usuario
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            Email
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            Nombre
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            Apellido Paterno
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            CURP
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                            RFC
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
                                <MenuItem onClick={() => {navigate("/access"); setActive(true)}}>Acceso</MenuItem>
                                <MenuItem onClick={() => {navigate("/rectification"); setActive(true)}}>Rectificación</MenuItem>
                                <MenuItem>Cancelación</MenuItem>
                                <MenuItem>Oposición</MenuItem>
                            </MenuList>
                        </Menu>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </Card>
    );
}

export default Table;