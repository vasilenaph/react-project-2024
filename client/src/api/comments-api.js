import requester from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/cars';

const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`;

export const create = (gameId, username, text) => requester.post(buildUrl(gameId), { username, text });

export const getAll = async (gameId) => {
    const result = await requester.get(buildUrl(gameId))

    const comments = Object.values(result);

    return comments;
}

export default {
    create,
    getAll
}