
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


import Navbar from './components/Navbar/Navbar';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';


function App() {
  return (
    <div >
<Navbar></Navbar>
<Routes> <Route path='/' element={<Home></Home>}> </Route> <Route path='/blog' element={<Blog></Blog>}> </Route> <Route path='/checkout' element={ <RequireAuth><Checkout></Checkout>  </RequireAuth>  }></Route> <Route path="/signup" element={<Signup></Signup>}></Route>    <Route path='/login' element={<Login></Login>}></Route>   </Routes>

        
    </div>
  );
}

export default App;
