export const validateConfirmation = async( confirmation = "") =>{

    if(confirmation == "" || confirmation == undefined){

        throw new Error(`The confirmation field is required`);

    }

    if(confirmation.toUpperCase() != "TRUE" ){

        throw new Error(`You need to confirm with the word TRUE`);

    }

}