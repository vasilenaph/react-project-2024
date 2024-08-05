import { Routes, Route } from "react-router-dom"

import { AuthContextProvider } from "./contexts/AuthContext"

import Home from "./components/home/Home"
import Header from "./components/header/Header"
import CarList from "./components/car-list/CarList"
import Login from "./components/login/Login" 
import Register from "./components/register/Register" 
import Logout from "./components/logout/Logout" 
import CarCreate from "./components/car-create/CarCreate"
import About from "./components/about/About"
import CarDetails from "./components/car-details/CarDetails"

function App() {

    return (
        <AuthContextProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cars" element={<CarList />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/cars/create" element={<CarCreate />} />
                        <Route path="/cars/:carId/details" element={<CarDetails />} />
                    </Routes>
                </main>
            </div>
        </AuthContextProvider>
    )
}

export default App
