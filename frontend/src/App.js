import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './compo.js/Navbar';
import AddProduct from './Components/AddProduct';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Home2 from './Components/Home2';
import UpdateProduct from './Components/Update';
import store from './store/store';

function App() {

  return (
    <div className="App">
        {/* Provider :   //react-redux Binder to inject the store into the application */}
      <Provider store={store} >        
      <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/' element={<Home2></Home2>}></Route>
        <Route path='*' element={<Home2></Home2>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/add' element={<AddProduct></AddProduct>}></Route>
        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
