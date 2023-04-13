import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './Components/ItemList';
import ItemDetailContainer from './Components/ItemDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer/>} />
          <Route exact path={"/category/:id"} element={<ItemListContainer/>} />
          <Route exact path={"/products/:id"} element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
