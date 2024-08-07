import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Oops!</h1>
                <p className="mt-2 text-lg text-gray-600">Something went wrong. The page you are looking for does not exist or there was an error.</p>
                <Link to="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Go Home</Link>
            </div>
        </div>
    );
};

