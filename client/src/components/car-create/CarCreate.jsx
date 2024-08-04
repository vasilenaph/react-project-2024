import { useNavigate } from "react-router-dom";
import { useCreateCar } from "../../hooks/useCars";
import { useForm } from "../../hooks/useForm";

const initialValues = {
    carName: '',
    model: '',
    color: '',
    maxSpeed: '',
    year: '',
    imageUrl: '',
    description: '',
}

export default function CarCreate() {
    const navigate = useNavigate();
    const createCar = useCreateCar();

    const createHandler = async (values) => {
        try {
            const {_id: gameId} = await createCar(values);
            navigate(`/cars/${gameId}/details`);
        } catch (error) {
            // TODO: Set error state and display error
            console.log(error);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createHandler);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-16">
            <div className="w-full max-w-sm p-6 space-y-4 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-bold text-center">Add Classic Car</h2>
                <form className="space-y-3" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="carName" className="block text-sm font-medium text-gray-700">
                            Car Name
                        </label>
                        <input
                            id="carName"
                            name="carName"
                            type="text"
                            value={values.carName}
                            onChange={changeHandler}
                            required
                            className="w-full px-2 py-1.5 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                        />
                    </div>
                    <div>
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                            Model
                        </label>
                        <input
                            id="model"
                            name="model"
                            type="text"
                            value={values.model}
                            onChange={changeHandler}
                            required
                            className="w-full px-2 py-1.5 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                        />
                    </div>
                    <div>
                        <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                            Color
                        </label>
                        <input
                            id="color"
                            name="color"
                            type="text"
                            value={values.color}
                            onChange={changeHandler}
                            required
                            className="w-full px-2 py-1.5 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                        />
                    </div>
                    <div>
                        <label htmlFor="maxSpeed" className="block text-sm font-medium text-gray-700">
                            Max Speed
                        </label>
                        <input
                            id="maxSpeed"
                            name="maxSpeed"
                            type="text"
                            value={values.maxSpeed}
                            onChange={changeHandler}
                            required
                            className="w-full px-2 py-1.5 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                        />
                    </div>
                    <div>
                        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                            Year
                        </label>
                        <input
                            id="year"
                            name="year"
                            type="number"
                            value={values.year}
                            onChange={changeHandler}
                            required
                            className="w-full px-2 py-1.5 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                        />
                    </div>
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            id="imageUrl"
                            name="imageUrl"
                            type="text"
                            value={values.imageUrl}
                            onChange={changeHandler}
                            required
                            className="w-full px-2 py-1.5 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={changeHandler}
                            required
                            className="w-full px-2 py-1.5 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Car
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
