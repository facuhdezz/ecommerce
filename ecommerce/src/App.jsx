import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import DestacadosList from "./components/complementos/DestacadosList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <aside>
          <NavBar />
        </aside>
        <main>
          <Routes>
            <Route path={"/"} element={<><DestacadosList /><ItemListContainer /></>} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </CartContextProvider>
    </>
  )
}

export default App;
