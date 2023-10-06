import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SingleView from "./pages/SingleView";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App user-select-none ">
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} id="Home" />
          <Route path="/Preview/:id" element={<SingleView />} />
          <Route path="/blank" />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
