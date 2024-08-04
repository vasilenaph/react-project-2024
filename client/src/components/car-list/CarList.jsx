import { useGetAllCars } from '../../hooks/useCars';

import CarListItem from './car-list-item/CarListItem';

export default function CarList() {
    const [cars] = useGetAllCars();

    return (
        <div className="mt-6 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                
                <h2 className="ml-1 text-2xl font-bold tracking-tight text-gray-900">Featured Cars</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {cars.length > 0
                        ? cars.map(car => <CarListItem key={car._id} {...car} />)
                        : <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                            No cars added yet.
                        </h3>
                    }
                </div>
            </div>
        </div>
    );
}
