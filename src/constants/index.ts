import { default as env } from './env';

import { default as config } from '../config';

const initGlobalVariables = async () => {
    // Config data
    global.configs = config();
    // Env data
    global.env = env();
};

export default initGlobalVariables

