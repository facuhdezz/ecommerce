import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { Link, Routes, Route } from "react-router-dom"
import Content from "./components/complementos/Content"

function App() {
  return (
    <>
      <aside>
        <NavBar />
      </aside>
      <main>
        <Routes>
          <Route path={"/"} element={            
              <>
                <ItemListContainer />
                <Content />
              </>            
          } />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
        </Routes>
      </main>
    </>
  )
}

export default App
