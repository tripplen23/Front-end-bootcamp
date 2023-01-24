import {
    TYPE_LOG,
} from './constant.js';

function logger(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger;