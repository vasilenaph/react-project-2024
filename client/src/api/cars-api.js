import * as request from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/cars';

export const getAll = () => request.get(BASE_URL);
