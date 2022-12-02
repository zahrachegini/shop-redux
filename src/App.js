import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 notFound!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
