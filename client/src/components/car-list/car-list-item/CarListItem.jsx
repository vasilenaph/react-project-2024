export default function CarListItem({
    _id,
    carName,
    model,
    imageUrl,
}) {
    return (
        <div className="group relative border border-gray-300 rounded-md p-4 bg-white">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                    src={imageUrl}
                    alt={`${carName} ${model}`}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-sm text-gray-700">
                    <a href={`/cars/${_id}/details`}>
                        {carName} {model}
                    </a>
                </h3>
                <div className="mt-4">
                    <a href={`/cars/${_id}/details`}
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Details
                    </a>
                </div>
            </div>
        </div>
    );
}
