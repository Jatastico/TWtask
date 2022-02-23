// Find Hacker News API here
// https://github.com/HackerNews/API

import axios from 'axios';

// TODO fetch ask stories (https://hacker-news.firebaseio.com/v0/askstories.json)

export const loadTopstories = async () => {
    return  await axios
            .get(
                `https://hacker-news.firebaseio.com/v0/askstories.json`
            )
            .then(res1 => res1.data)

    };

// TODO fetch item by id (https://hacker-news.firebaseio.com/v0/item/<itemId>.json)

export const fetchStoryById = async (id) => {

    return await axios
        .get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        ).then(res2 => res2)
}