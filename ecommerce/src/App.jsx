import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import DestacadosList from "./components/complementos/DestacadosList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ColorMode from "./components/complementos/ColorMode";

function App() {
  return (
    <>
      <aside>
        <NavBar />
      </aside>
      <main>
        <ColorMode />
        <Routes>
          <Route path={"/"} element={<><DestacadosList /><ItemListContainer /></>} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
