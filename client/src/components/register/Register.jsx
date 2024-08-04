import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = {
    email: '',
    password: '',
    'confirm_password': '',
}

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values['confirm_password']) {
            return setError('Password missmatch!');
        }

        try {
            await register(values.email, values['confirm_password']);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler)

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <form className="space-y-4" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={changeHandler}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={changeHandler}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            id="confirm_password"
                            name="confirm_password"
                            type="password"
                            value={values['confirm_password']}
                            onChange={changeHandler}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {
                            error && (
                                <p style={{color: 'red'}} className="ml-1 text-sm text-gray-600">
                                    <span>{error}</span>
                                </p>
                            )
                        }
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

