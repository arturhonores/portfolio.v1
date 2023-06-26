import { Route, Routes } from "react-router-dom"
import HomePage from '../page/HomePage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    )
}
export default AppRoutes