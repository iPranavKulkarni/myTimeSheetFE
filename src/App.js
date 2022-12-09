import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import AddData from './components/AddData'
import Dashboard from './components/Dashboard'
import Product from './components/Product'
import CreateTable from './components/CreateTable'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1><Dashboard /></h1>} />
          <Route path="/add" element={<AddData />} />
          <Route path="/product" element={<h1><CreateTable /></h1>} />
          {/* <Route path="/product" element={<h1><Product/></h1>} />           */}
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
