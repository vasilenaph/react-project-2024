import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./components/home/Home"
import Header from "./components/header/Header"
import CarList from "./components/car-list/CarList"
import Login from "./components/login/Login" 
import Register from "./components/register/Register" 
import CarCreate from "./components/car-create/CarCreate"
import About from "./components/about/About"
import CarDetails from "./components/car-details/CarDetails"
import { AuthContext } from "./contexts/AuthContext"

function App() {
    // TODO: Remove this from App Component
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        // TODO: Quick solution, fix by implementing persisted authState 
        localStorage.setItem('accessToken', state.accessToken)

        setAuthState(state);
    }

    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contextData}>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cars" element={<CarList />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/cars/create" element={<CarCreate />} />
                        <Route path="/cars/:carId/details" element={<CarDetails />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    )
}

export default App
