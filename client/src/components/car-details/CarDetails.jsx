

// Example car object for demonstration purposes
const car = {
    carName: "Opel",
    model: "Astra",
    year: "1980",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjQg74gJGEq4BHxinLeK5Z_-p5VXeBFRCWg&s",
    description: "This is an example description of the car. It includes details about the car's features, history, and other relevant information.",
};

export default function CarDetails() {



    return (
        <div className=" mt-20 bg-gray-100 min-h-screen py-4 px-2 sm:px-4 lg:px-6">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4">
                <button className="mb-2 text-gray-500 hover:text-gray-700 text-sm">
                    &larr; Back to List
                </button>
                <div className="flex justify-center mb-4">
                    <img
                        src={car.imageUrl}
                        alt={car.carName}
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>
                <h2 className="text-2xl font-bold mt-2">{car.model}</h2>
                <p className="text-md text-gray-700 mt-1">Year: {car.year}</p>
                <p className="text-md text-gray-700 mt-1">Description:</p>
                <p className="text-base text-gray-600 mt-1">{car.description}</p>
                <div className="mt-6 flex justify-end space-x-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Edit
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                        Delete
                    </button>
                </div>

                {/* Comment Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900">Comments</h3>
                    <form className="mt-4">
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows="4"
                            placeholder="Write a comment..."
                        />
                        <button
                            type="submit"
                            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Submit Comment
                        </button>
                    </form>
                    {/* Existing comments will go here */}
                    <div className="mt-4 space-y-4">
                        <div className="p-2 bg-gray-100 rounded-md">
                            <p className="text-sm text-gray-800">Example comment text. This is where a user's comment will appear.</p>
                        </div>
                        {/* Add more comments here */}
                    </div>
                </div>
            </div>
        </div>
    );
}
