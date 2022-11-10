import {DEV_URL} from '@env';

const devEnvironmentVariables = {DEV_URL};

export default __DEV__ ? devEnvironmentVariables : devEnvironmentVariables;
