export const validateAge = async( age = 0 ) => {

    if(age < 18){

        throw new Error("Solo se autoriza mayores de edad.");

    }

    if(age > 100){

        throw new Error(`La edad: ${age} no es valida para trabajar.`);

    }

}

export const validateDPI = async ( DPI = 0 ) => {

    const toStringDPI = DPI.toString();

    const length = toStringDPI.length;

    console.log(length);

    if(length != 13){

        throw new Error("El DPI necesita tener 13 caracteres")
        
    }

}