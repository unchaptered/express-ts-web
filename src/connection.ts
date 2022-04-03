import 'dotenv/config';
import * as mongoose from 'mongoose';

// export let connection: mongoose;

export default () => {
    
    mongoose.connect(process.env.DB_URL ? process.env.DB_URL : '' , (err) => {

        if (err) {
            console.log('Failed to connect db' + JSON.stringify(err));
        } else {
            console.log('Success to connect db');
        }

    });

}