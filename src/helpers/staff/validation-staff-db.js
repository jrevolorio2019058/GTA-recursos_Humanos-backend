import Status from "../../status/status.model.js";

import UniformSize from "../../uniformSize/uniformSize.model.js";

export const validateUniformStatus = async ( uniform_Status = "" ) => {

    const existStatus = await Status.findOne({ staffStatus: uniform_Status });

    if(!existStatus){

        throw new Error(`${uniform_Status} not exist in db`);

    }

}
export const validateUniformSize = async ( uniform_Size = "" ) => {

    const existSize = await UniformSize.findOne({ size: uniform_Size });

    if(!existSize){

        throw new Error(`${uniform_Size} not exist in db`);

    }

}

export const validateFormatDateHire = async (hire_Date = "") => {

    let count = 0;

    for(let i = 0; i < hire_Date.length; i++){

        if(hire_Date[i] === "/"){

            count++;

        }

    }

    if(count !== 2){

        throw new Error("Formato de fecha incorrecto, unicamente necesita dos separadores '/'; Ejemplo: 30/08/2024");

    }

    const validateDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if(!validateDate.test(hire_Date)){

        throw new Error("Formato de fecha incorrecto, formato a seguir: Día/Mes/Año; Ejemplo: 30/08/2024");

    }

    const [day, month, year] = hire_Date.split("/").map(Number);

    const date = new Date(year, month - 1, day);

    const isDateValid = (

        date.getFullYear() === year &&

        date.getMonth() + 1 === month &&

        date.getDate() === day

    );

    if(!isDateValid){

        throw new Error("Formato de fecha incorrecto, formato a seguir: Día/Mes/Año; Ejemplo: 30/08/2024");

    }

}

export const validateFormatDateShipping = async (shipping_Date = "") => {

    let count = 0;

    for(let i = 0; i < shipping_Date.length; i++){

        if(shipping_Date[i] === "/"){

            count++;

        }

    }

    if(count !== 2){

        throw new Error("Formato de fecha incorrecto, unicamente necesita dos separadores '/'; Ejemplo: 30/08/2024");

    }

    const validateDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if(!validateDate.test(shipping_Date)){

        throw new Error("Formato de fecha incorrecto, formato a seguir: Día/Mes/Año; Ejemplo: 30/08/2024");

    }

    const [day, month, year] = shipping_Date.split("/").map(Number);

    const date = new Date(year, month - 1, day);

    const isDateValid = (

        date.getFullYear() === year &&

        date.getMonth() + 1 === month &&

        date.getDate() === day

    );

    if(!isDateValid){

        throw new Error("Formato de fecha incorrecto, formato a seguir: Día/Mes/Año; Ejemplo: 30/08/2024");

    }

}