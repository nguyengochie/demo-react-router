import './App.css'
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Product from './component/Product';
import Laptop from './component/Laptop';
import Desktop from './component/Desktop';
import ListProduct from './component/ListProduct';
import PrivateHome from './component/PrivateHome';
import DetailProduct from './component/DetailProduct';
import Users from './component/Users';
const LazyBlog = lazy(() => import("./component/Blog"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />

      <Route path="/blog/:code" element={
        <Suspense fallback={<h2>...Loading</h2>}>
          <LazyBlog />
        </Suspense>
      } />

      <Route path='/products' element={<Product />}>
        <Route index element={<ListProduct />} />
        <Route path='laptop' element={<Laptop />} />
        <Route path='desktop' element={<Desktop />} />
      </Route>

      <Route path='/login' element={<h1>Login</h1>} />
      <Route path='/home' element={<PrivateHome />}>
        <Route index element={<h1>Trang private 1</h1>} />
        <Route path='two' element={<h1>Trang private 2</h1>} />
        <Route path='three' element={<h1>Trang private 3</h1>} />
      </Route>

      <Route path='/product/detail/:id' element={<DetailProduct />} />

      <Route path='/user' element={<Users />} >
        <Route path='profile' element={<h1>Profile</h1>} />
        <Route path='orders' element={<h1>Orders</h1>} />
      </Route>

      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  )
}

export default App
