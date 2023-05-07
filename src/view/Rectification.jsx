import React from 'react';
import { useContext } from "react";
import { BackContext } from '../context/BackContext';
import { Input } from "@material-tailwind/react";
import { useLocation, useNavigate } from 'react-router-dom';
import {Formik, Form} from "formik";
import * as Yup from "yup";

const Rectification = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {setActive} = useContext(BackContext);
    console.log(state)

    const schema = Yup.object().shape({
        name: Yup.
            string().
            nonNullable().
            required("Este Campo es Obligatorio"),
        lastName: Yup.
            string().
            nonNullable().
            required("Este Campo es Obligatorio"),
        birthday: Yup.
            date().
            required("Este Campo es Obligatorio").
            nonNullable(),
        nationality: Yup.
            string().
            nonNullable().
            required("Este Campo es Obligatorio"),
        state: Yup.
            string().
            nonNullable().
            required("Este Campo es Obligatorio"),
        curp: Yup.
            string().
            matches(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/).
            required("Este Campo es Obligatorio").
            nonNullable(),
        cellphone: Yup.
            string().
            matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/).
            required("Este Campo es Obligatorio").
            nonNullable(),
        email: Yup.
            string().
            email("Email No Válido").
            required("Este Campo es Obligatorio").
            nonNullable()
    });

    return (
        <div className="w-1/2 h-fit mx-auto right-auto p-2 rounded-md bg-gray-100 mt-10 shadow-xl">
            <Formik
                initialValues={{
                    name: state.name,
                    lastName: state.lastName,
                    birthday: state.birthday,
                    nationality: state.nationality,
                    state: state.state,
                    curp: state.curp,
                    cellphone: state.cellphone,
                    email: state.email
                }}
                onSubmit={async(values, {resetForm}) => {
                    await fetch(`https://siredak.herokuapp.com/clients/rectification/client/${state.id_clients}`, {method: "PUT"}).
                    then(res => res.json()).
                    then(ans => {
                        console.log("VALS",values,"RES:", ans);
                        setActive(prev => !prev);
                        navigate("../");
                    })

                }}
                validationSchema={schema}
                >
                {({handleSubmit, handleChange, values, errors, touched}) => {
                    return(
                        <Form
                            onSubmit={handleSubmit}
                            className="w-full h-fit flex flex-col gap-5"
                        >
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                label="Nombre"
                                className=""
                                onChange={handleChange}
                                value={values.name}
                                error={errors.name && touched.name? true : false}
                            />
                            <Input
                                id="lastName"
                                name="lastName"
                                type="text"
                                label="Apellido"
                                className=""
                                onChange={handleChange}
                                value={values.lastName}
                                error={errors.lastName && touched.lastName? true : false}
                            />
                            <Input
                                id="birthday"
                                name="birthday"
                                type="date"
                                label="Cumpleaños"
                                className=""
                                onChange={handleChange}
                                value={values.birthday}
                                error={errors.birthday && touched.birthday? true : false}
                            />
                            <Input
                                id="nationality"
                                name="nationality"
                                type="text"
                                label="Nacionalidad"
                                className=""
                                onChange={handleChange}
                                value={values.nationality}
                                error={errors.nationality && touched.nationality? true : false}
                            />
                            <Input
                                id="state"
                                name="state"
                                type="text"
                                label="Estado"
                                className=""
                                onChange={handleChange}
                                value={values.state}
                                error={errors.state && touched.state? true : false}
                            />
                            <Input
                                id="curp"
                                name="curp"
                                type="text"
                                label="CURP"
                                className=""
                                onChange={handleChange}
                                value={values.curp}
                                error={errors.curp && touched.curp? true : false}
                            />
                            <Input
                                id="cellphone"
                                name="cellphone"
                                type="text"
                                label="Número de Teléfono"
                                className=""
                                onChange={handleChange}
                                value={values.cellphone}
                                error={errors.cellphone && touched.cellphone? true : false}
                            />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                label="E-mail"
                                className=""
                                onChange={handleChange}
                                value={values.email}
                                error={errors.email && touched.email? true : false}
                            />
                            <div className="w-full h-fit mt-5 flex justify-end">
                                <button
                                    type="submit"
                                    className="w-1/4 h-10 rounded-xl bg-violet transition duration-500 delay-75 ease-in-out hover:scale-110 hover:text-white hover:shadow-md"
                                >Guardar</button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default Rectification;