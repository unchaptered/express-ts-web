import * as pg from "pg";

export let connection: pg.Pool;

export default () => {
    
    connection= new pg.Pool({
        database: 'postgres',
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        port: process.env.DB_PORT ? +process.env.DB_PORT : 1111,
        max: process.env.DB_MAX_CONNECT ? +process.env.DB_MAX_CONNECT : 5
    });

    connection.connect( err => {

        if (err) {
            console.log('Failed to connect db' + JSON.stringify(err));
        } else {
            console.log('Success to connect db');
        }

    })
}