import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import AppleProductList from "./pages/AppleProductList";

const App = () => {
  // return <Home/>;
  // return <ProductList/>
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/productList" element={<ProductList/>}/>
        <Route path="/company/apple" element={<AppleProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;