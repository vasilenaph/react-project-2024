import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = {
    email: '',
    password: ''
}

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, loginHandler);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form className="space-y-7" onSubmit={submitHandler}>
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
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
