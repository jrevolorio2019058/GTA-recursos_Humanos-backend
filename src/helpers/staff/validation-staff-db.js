import Status from "../../status/status.model.js";

import UniformSize from "../../uniformSize/uniformSize.model.js";

export const validateUniformStatus = async ( uniform_Size = "" ) => {

    const existStatus = await Status.findOne({ size: uniform_Size });

    if(!existStatus){

        throw new Error(`${uniform_Size} not exist in db`);

    }

}