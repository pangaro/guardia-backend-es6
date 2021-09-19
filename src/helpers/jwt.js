import jwt from 'jsonwebtoken';


export const generateJWT = ( name ) => {

    return new Promise( ( resolve, reject ) => {

        const payload = { name };

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, ( error, token ) => {

            if ( error ) {
                console.log(error);
                reject( 'No se pudo generar el token' );
            }

            resolve( token);        
        } );
    });
}