import Aside from "./components/Aside"
import ItemListContainer from "./components/ItemListContainer"
import Content from "./components/content"

function App() {
  return (
    <>
      <main>
        <aside>
          <Aside />
        </aside>
        <section>
          <h1 className="titulos">Destacados</h1>
          <ItemListContainer greeting={"La página actualmente se encuentra en desarrollo!"}></ItemListContainer>
          <h1 className="titulos">Descubrí</h1>
          <Content />
        </section>
      </main>
    </>
  )
}

export default App
