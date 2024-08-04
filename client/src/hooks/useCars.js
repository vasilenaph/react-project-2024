import { useState, useEffect } from "react";
import carsAPI from "../api/cars-api";
import { useParams } from "react-router-dom";

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