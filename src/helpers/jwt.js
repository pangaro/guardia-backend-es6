import jwt from 'jsonwebtoken';


export const generateJWT = ( username ) => {

    return new Promise( ( resolve, reject ) => {

        const payload = { username };

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            //expiresIn: '2h'
            expiresIn: '40h'
        }, ( error, token ) => {

            if ( error ) {
                console.log(error);
                reject( 'No se pudo generar el token' );
            }

            resolve( token);        
        } );
    });
}