import './App.css';
import {BrowserRouter, Router, Route, Link, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Resource from "./components/Resource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resource" element={<Resource />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
