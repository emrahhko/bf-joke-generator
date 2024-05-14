import { dom } from '../dom.js';
import { getJokeHandler } from '../handlers/getJokeHandler.js';

export const getJokeEvent = () => {
    dom.btn.addEventListener('click', getJokeHandler);
};
