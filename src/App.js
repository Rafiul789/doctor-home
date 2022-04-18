
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';


import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div >
<Navbar></Navbar>
<Routes> <Route path='/' element={<Home></Home>}> </Route> <Route path='/blog' element={<Blog></Blog>}> </Route> <Route path='/checkout' element={<Checkout></Checkout>}></Route>  </Routes>

        
    </div>
  );
}

export default App;
