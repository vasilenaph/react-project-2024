import { useState, useEffect } from "react";
import carsAPI from "../api/cars-api";

export function useGetAllCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await carsAPI.getAll();

            setCars(result);
        })();
    }, []);

    return [cars, setCars];
}

export function useGetOneCars(carId) {
    const [car, setCar] = useState({});

    useEffect(() => {
        (async () => {
            const result = await carsAPI.getOne(carId);

            setCar(result);
        })();
    }, [carId]);

    return [car, setCar];
}

export function useCreateCar() {
    const carCreateHandler = (carData) => carsAPI.create(carData);

    return carCreateHandler;
}

