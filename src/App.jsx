import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5pw] md:px-[7vw] lg:px-[9vw]">
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/collection" Component={Collection} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/product/:productId" Component={Product} />
          <Route exact path="/cart" Component={Cart} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/place-order" Component={PlaceOrder} />
          <Route exact path="/orders" Component={Orders} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
