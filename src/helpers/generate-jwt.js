import jwt from 'jsonwebtoken';

export const generateJWT = (uid = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid };

        jwt.sign(

            payload,

            process.env.SECRETPRIVATEKEY,

            {

                expiresIn: '2h'

            },

            (err, token) =>{

                err ? (console.log(err), reject('ERROR | Token cannot be generated')) : resolve(token);

            }

        )

    })

}