import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/cars';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const cars = Object.values(result);

    return cars;
}

export const getOne = (cardId) => request.get(`${BASE_URL}/${cardId}`);

export const create = (carData) => request.post(`${BASE_URL}`, carData)

const carsAPI = {
    getAll,
    getOne,
    create,
}

export default carsAPI;