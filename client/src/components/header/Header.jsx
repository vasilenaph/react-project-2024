import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Header() {
    const { isAuthenticated } = useAuthContext();

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex items-center lg:flex-1">
                    <Link to='/' className="-m-1.5 p-1.5">
                        <span className="sr-only">OldSchoolAuto</span>
                        <img
                            alt="OldSchoolAuto"
                            src="\logo.png"
                            className="h-20 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-x-12">
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
                        Home
                    </Link>
                    <Link to="/cars" className="text-sm font-semibold leading-6 text-gray-900">
                        All Cars
                    </Link>
                    {isAuthenticated && (
                        <Link to="/cars/create" className="text-sm font-semibold leading-6 text-gray-900">
                            Create Car
                        </Link>
                    )}
                    <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {isAuthenticated ? (
                        <Link to="/logout" className="text-sm font-semibold leading-6 text-gray-900">
                            Logout <span aria-hidden="true">&rarr;</span>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="ml-3 text-sm font-semibold leading-6 text-gray-900">
                                Login <span aria-hidden="true">&rarr;</span>
                            </Link>
                            <Link to="/register" className="ml-3 text-sm font-semibold leading-6 text-gray-900">
                                Register <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
