import { useParams } from "react-router-dom";
import { useGetOneCars } from "../../hooks/useCars";
import { useForm } from "../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../hooks/useComment";
import { useAuthContext } from "../../contexts/AuthContext";

const initialValues = {
    comment: '',
}

export default function CarDetails() {
    const { carId } = useParams();
    const [comments, dispatch] = useGetAllComments(carId);
    const createComment = useCreateComment();
    const { email } = useAuthContext();
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

    return (
        <div className=" mt-20 bg-gray-100 min-h-screen py-4 px-2 sm:px-4 lg:px-6">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4">
                <button className="mb-2 text-gray-500 hover:text-gray-700 text-sm">
                    &larr; Back to List
                </button>
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
