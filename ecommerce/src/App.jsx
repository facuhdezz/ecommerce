import Aside from "./components/Aside"
import ItemListContainer from "./components/ItemListContainer"
import Content from "./components/Content"

function App() {
  return (
    <>
      <aside>
        <Aside />
      </aside>
      <main>
        <h1 className="titulos" id="destacados">Destacados</h1>
        <ItemListContainer greeting={"La página actualmente se encuentra en desarrollo!"}></ItemListContainer>
        <h1 className="titulos">Descubrí</h1>
        <Content />
      </main>
    </>
  )
}

export default App
