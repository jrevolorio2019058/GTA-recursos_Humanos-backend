"use strict";

import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import User from "../src/user/user.model.js";

import { dbConnection } from "./mongo.js";

import { initialCredentials } from "./credentials.js";

import apiLimiter from '../src/middlewares/validate-PetitionLimit.js';

import authRoutes from '../src/auth/auth.routes.js';

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        this.authPath = '/GTA-recursos_Humanos/auth';

        this.middlewares();
        this.connectDB();
        this.defaultCredentials();
        this.routes();

    }

    middlewares(){

        this.app.use(express.urlencoded({ extended: false}));
        this.app.use(apiLimiter);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan("dev"));

    }

    async connectDB(){

        await dbConnection();

    }

    async defaultCredentials(){

        const credentialsCreated = await User.findOne({ username: "dflores"});

        if(!credentialsCreated){

            initialCredentials();

        }else{

            console.log("Credentials have already been created");

        }

    }

    listen(){

        this.app.listen(this.port, () => {

            console.log('Server running on port: ', this.port);

        });

    }

    routes(){

        this.app.use(this.authPath, authRoutes);

    }

}

export default Server;