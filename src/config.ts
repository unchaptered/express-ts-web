import * as dotenv from 'dotenv';
import * as path from 'path';

export default () => {

    const configValue = process.env.NODE_ENV;
    if (configValue) {
        dotenv.config({
            path: path.join(__dirname, `../.env.${configValue}`)
        });
    } else {
        // publish 모드는 따로 배포 플랫폼에 따라서 별도로 설정.
    }
};