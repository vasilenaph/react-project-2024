import * as request from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/cars';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const cars = Object.values(result);

    return cars;
}

export const getOne = (cardId) => request.get(`${BASE_URL}/${cardId}`);

const carsAPI = {
    getAll,
    getOne,
}

export default carsAPI;