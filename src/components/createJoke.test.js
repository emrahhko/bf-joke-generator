/**
 * @jest-environment jsdom
 */

import { createJoke } from './createJoke.js';

describe('createJoke function', () => {
    const jokeData = {
        category: 'Programming',
        type: 'twopart',
        setup: 'Why do programmers prefer dark mode?',
        delivery: 'Because light attracts bugs!',
        flags: {
            nsfw: false,
            religious: false,
            political: false,
            racist: false,
            sexist: false,
            explicit: false,
        },
        safe: true,
        lang: 'en',
    };

    const item = createJoke(jokeData);

    test('nodeName -> DIV', () => {
        expect(item.nodeName).toEqual('DIV');
    });

    test('childElementCount -> 7', () => {
        expect(item.childElementCount).toEqual(7);
    });

    test('category should be correct', () => {
        const category = item.querySelector('#category');
        expect(category.innerText).toEqual('Programming');
    });

    test('type should be correct', () => {
        const type = item.querySelector('#type');
        expect(type.innerText).toEqual('twopart');
    });

    test('setup should be correct for twopart jokes', () => {
        const setup = item.querySelector('#setup');
        expect(setup.innerText).toEqual('Why do programmers prefer dark mode?');
    });

    test('delivery should be correct for twopart jokes', () => {
        const delivery = item.querySelector('#delivery');
        expect(delivery.innerText).toEqual('Because light attracts bugs!');
    });

    test('flags should be correct', () => {
        const flags = item.querySelector('#flags');
        expect(flags.childElementCount).toEqual(6);
        const flagItems = Array.from(flags.children).map(
            (child) => child.innerText,
        );
        expect(flagItems).toEqual([
            'nsfw',
            'religious',
            'political',
            'racist',
            'sexist',
            'explicit',
        ]);
    });

    test('language should be correct', () => {
        const lang = item.querySelector('#lang');
        expect(lang.innerText).toEqual('English');
    });

    test('safe status should be correct', () => {
        const safe = item.querySelector('#safe');
        expect(safe.innerText).toEqual('Safe for Everyone');
        expect(safe.classList.contains('safe')).toBe(true);
    });
});
