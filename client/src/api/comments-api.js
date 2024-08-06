import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments';

export const create = (carId, text) => requester.post(BASE_URL, { carId, text });

export const getAll = (carId) =>{
    const params = new URLSearchParams({
        where: `carId="${carId}"`
    });
    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const commentsAPI = {
    create,
    getAll,
}

export default commentsAPI;