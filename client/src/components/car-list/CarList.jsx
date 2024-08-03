import { useEffect, useState } from 'react';

import * as carsAPI from '../../api/cars-api'

import CarListItem from './car-list-item/CarListItem';

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsAPI.getAll()
            .then(result => setCars(result));
    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Cars</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {cars.map(car => <CarListItem key={car._id} {...car} />)}
                </div>
            </div>
        </div>
    );
}
