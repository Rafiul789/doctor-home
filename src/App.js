
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';

import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div >
<Navbar></Navbar>
<Toaster/>
<Routes> <Route path='/' element={<Home></Home>}> </Route> <Route path='/blog' element={<Blog></Blog>}> </Route> <Route path='/checkout' element={ <RequireAuth><Checkout></Checkout>  </RequireAuth>  }></Route> <Route path="/about" element={<About></About>}></Route>    <Route path="/signup" element={<Signup></Signup>}></Route>    <Route path='/login' element={<Login></Login>}></Route>  <Route path='*' element={<NotFound></NotFound>} ></Route>    </Routes>

        
    </div>
  );
}

export default App;
