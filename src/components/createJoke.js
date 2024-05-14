export const createJoke = (jokeData) => {
    const container = document.createElement('div');
    container.id = 'joke-container';
    container.classList.add('joke');

    const category = document.createElement('h2');
    category.id = 'category';
    category.classList.add('category');
    category.innerText = jokeData.category;

    const type = document.createElement('p');
    type.id = 'type';
    type.classList.add('type');
    type.innerText = jokeData.type; // here

    container.append(category, type);

    if (jokeData.type === 'twopart') {
        const setup = document.createElement('p');
        setup.id = 'setup';
        setup.classList.add('setup');
        setup.innerText = jokeData.setup;

        const delivery = document.createElement('p');
        delivery.id = 'delivery';
        delivery.classList.add('delivery');
        delivery.innerText = jokeData.delivery;
        container.append(setup, delivery);
    } else {
        const joke = document.createElement('p');
        joke.id = 'joke';
        joke.classList.add('joke');
        joke.innerText = jokeData.joke;
        container.append(joke);
    }

    const flags = document.createElement('ul');
    flags.id = 'flags';
    flags.classList.add('flags');
    for (const flag in jokeData.flags) {
        const li = document.createElement('li');
        li.className = String(jokeData.flags[flag]);
        li.innerText = flag;
        flags.append(li);
    }

    const lang = document.createElement('p');
    lang.id = 'lang';
    lang.classList.add('lang');
    lang.innerText = 'English';

    const safe = document.createElement('p');
    safe.id = 'safe';
    if (jokeData.safe === true) {
        safe.classList.add('safe');
        safe.innerText = 'Safe for Everyone';
    } else {
        safe.classList.add('unsafe');
        safe.innerText = 'Warning: Explicit Content';
    }
    // safe.innerText = 'safe';

    container.append(flags, lang, safe);
    return container;
};
