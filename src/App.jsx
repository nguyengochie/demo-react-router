import './App.css'
import { Routes, Route } from "react-router-dom";
import Product from './component/Product';
import Laptop from './component/Laptop';
import Desktop from './component/Desktop';
import ListProduct from './component/ListProduct';
import Blog from './component/Blog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />

      <Route path="/blog/:cateId/:postId" element={<Blog />} />

      <Route path='/products' element={<Product />}>
        <Route index element={<ListProduct />} />
        <Route path='laptop' element={<Laptop />} />
        <Route path='desktop' element={<Desktop />} />
      </Route>
      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  )
}

export default App
