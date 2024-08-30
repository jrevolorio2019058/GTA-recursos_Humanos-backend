export const validateAge = async( age = "" ) => {

    switch(age){

        case age < 18:

            throw new Error("Solo se autoriza mayores de edad.");

            break;

        case age > 100:

            throw new Error(`La edad: ${age} no es valida para trabajar.`);
        
            break;

        default:

            break;

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