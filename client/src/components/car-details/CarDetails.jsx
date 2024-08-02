import React from 'react';

// Example car object for demonstration purposes
const car = {
    imageUrl: "https://www.topgear.com/sites/default/files/2021/08/DSC03713.jpg",
    model: "Example Car Model",
    year: "2024",
    description: "This is an example description of the car. It includes details about the car's features, history, and other relevant information.",
};

export default function CarDetails() {
    return (
        <div className="pt-20 bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <button
                    className="mb-4 text-gray-500 hover:text-gray-700 text-sm"
                >
                    &larr; Back to List
                </button>
                <div className="flex justify-center mb-8">
                    <img
                        src={car.imageUrl}
                        alt={car.model}
                        className="max-w-md w-full h-auto object-cover rounded-md"
                    />
                </div>
                <h2 className="text-3xl font-bold mt-4">{car.model}</h2>
                <p className="text-lg text-gray-700 mt-2">Year: {car.year}</p>
                <p className="text-lg text-gray-700 mt-2">Description:</p>
                <p className="text-base text-gray-600 mt-2">{car.description}</p>
                <div className="mt-8 flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
