import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/cars';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const cars = Object.values(result);

    return cars;
}

export const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
    });
    console.log(urlSearchParams.toString())
    const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

    const latestCars = Object.values(result);

    return latestCars;
}

export const getOne = (cardId) => request.get(`${BASE_URL}/${cardId}`);

export const create = (carData) => request.post(`${BASE_URL}`, carData);

export const remove = (carId) => request.del(`${BASE_URL}/${carId}`);

export const update = (carId, carData) => request.put(`${BASE_URL}/${carId}`, carData);

const carsAPI = {
    getAll,
    getLatest,
    getOne,
    create,
    remove,
    update,
}

export default carsAPI;