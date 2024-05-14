import { getJoke } from '../../apis/getJoke.js';
import { createJoke } from '../components/createJoke.js';
import { dom } from '../dom.js';

export const getJokeHandler = async () => {
    const jokeData = await getJoke();
    const jokeDom = createJoke(jokeData);
    dom.root.innerHTML = '';
    dom.root.append(jokeDom);
};
