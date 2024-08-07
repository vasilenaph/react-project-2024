import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneCars } from "../../hooks/useCars";
import { useForm } from "../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../hooks/useComment";
import { useAuthContext } from "../../contexts/AuthContext";
import carsAPI from "../../api/cars-api";

const initialValues = {
    comment: '',
}

export default function CarDetails() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const [comments, dispatch] = useGetAllComments(carId);
    const createComment = useCreateComment();
    const { email, userId } = useAuthContext();
    const [car] = useGetOneCars(carId);
    const { isAuthenticated } = useAuthContext();

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(carId, comment);

            // setComments(oldComments => [...oldComments, newComment]);
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } })
        } catch (error) {
            console.log(error.message);
        }
    });

    const carDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${car.carName} car?`);

        if (!isConfirmed) {
            return;
        }

        try {
            await carsAPI.remove(carId);

            navigate('/cars');
        } catch (error) {
            console.log(error);
        }
    }

    const isOwner = userId === car._ownerId;

    return (
        <div className=" mt-20 bg-gray-100 min-h-screen py-4 px-2 sm:px-4 lg:px-6">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4">
                <h1 className="mb-3 text-2xl font-bold mt-2 text-center">{car.carName} {car.model}</h1>
                <div className="flex justify-center mb-4">
                    <img
                        src={car.imageUrl}
                        // alt={car.carName}
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>

                <p className="text-md text-gray-700 mt-2">
                    <span className="font-bold">Color:</span> {car.color}
                </p>
                <p className="text-md text-gray-700 mt-2">
                    <span className="font-bold">MaxSpeed:</span> {car.maxSpeed}
                </p>
                <p className="text-md text-gray-700 mt-2">
                    <span className="font-bold">Year:</span> {car.year}
                </p>
                <p className="text-md text-gray-700 mt-2">
                    <span className="font-bold">Description:</span> {car.description}
                </p>

                {isOwner &&
                    <div className="mt-6 flex justify-end space-x-4">
                        <Link to={`/cars/${carId}/edit`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Edit
                        </Link>
                        <button onClick={carDeleteHandler} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                            Delete
                        </button>
                    </div>}

                {/* Comment Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900">Comments: </h3>
                    {isAuthenticated &&
                        <form className="mt" onSubmit={submitHandler}>
                            <textarea
                                className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                rows="4"
                                name="comment"
                                required
                                placeholder="Write a comment..."
                                value={values.comment}
                                onChange={changeHandler}
                            />
                            <button
                                type="submit"
                                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                            >
                                Add Comment
                            </button>
                        </form>
                    }
                    {/* Existing comments will go here */}
                    <div className="mt-4 space-y-4">
                        {
                            comments.map(comment => (
                                <div key={comment._id} className="p-2 bg-gray-100 rounded-md">
                                    <p className="font-bold text-sm text-gray-800">
                                        {comment.author.email}: {comment.text}
                                    </p>
                                </div>))
                        }

                        {
                            comments.length === 0 &&
                            <h2 className="font-bold mt-1 text-xl text-gray-800">No comments</h2>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
