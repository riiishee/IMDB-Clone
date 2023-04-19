import './App.css';
import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { routhpath } from './constants/route';


function App() {
  return (
   <>
 
  <Router >


<Routes>
<Route path={routhpath.home} element={<Home />} />
<Route path={routhpath.categories} element={<CategoryMovies />} />
<Route path={routhpath.invalid} element={<Home/> } />

</Routes>
  </Router>
   </>
  );
}

export default App;
