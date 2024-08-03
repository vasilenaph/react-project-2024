import { Link } from "react-router-dom";

export default function LatestCar({
    _id,
    carName,
    imageUrl,
    model,
    year
}) {
    return (

        <div className="group relative border border-gray-300 rounded-md p-4 bg-white">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={imageUrl}
                    alt={`${carName} ${model}`}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="mt-4 flex flex-col items-center text-center">
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">{carName} {model}</h3>
                    <p className="mt-1 text-sm text-gray-500">Year: {year}</p>
                </div>
                <div className="mt-4">
                    <Link
                        to={`/cars/${_id}/details`}
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}