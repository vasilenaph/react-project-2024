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