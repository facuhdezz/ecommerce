import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import DestacadosList from "./components/complementos/DestacadosList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";
import { useEffect, useRef } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Error404 from "./components/Error404";
import Feed from "./components/Instagram/Feed";

function App() {

  const mainRef = useRef(null);
  // Aquí ejecuto una función al escucar el evento 'scrollToTop',
  // ya que al cambiar entre rutas el main se quedaba congelado en su posición actual
  // y podría confundir al usuario, así que se hace un scroll a la parte superior del main
  // este evento se emite desde botones como el home (en AsideCab.jsx en /complementos) o las cards de productos en las categorías (en Item.jsx).

  useEffect(() => {
    const handleScrollToTop = () => {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scrollToTop', handleScrollToTop); // ejecuto la funcion al capturar el evento 'scrollToTop'

    return () => {
      window.removeEventListener('scrollToTop', handleScrollToTop); // limpio el evento
    };
  }, []);

  return (
    <>
      <CartContextProvider>
        <aside>
          <NavBar />
        </aside>
        <main ref={mainRef}>
          <Routes>
            <Route path={"/"} element={<><DestacadosList /><ItemListContainer /><Feed /></>} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />            
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </main>
      </CartContextProvider>
    </>
  );
}

export default App;
