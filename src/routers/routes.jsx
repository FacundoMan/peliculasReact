
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {LandingPage} from "../pages/LandingPage"
import { MovieDetails } from '../pages/MovieDetails'
export function MyRoutes(){
    return(<Router>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}></Route>
            <Route exact path="/details/:movieId" element={<MovieDetails/>}></Route>
            

        </Routes>
    </Router>)
}