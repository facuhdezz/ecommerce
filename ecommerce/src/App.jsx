import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Content from "./components/content"

function App() {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting={"La página actualmente se encuentra en desarrollo!"}></ItemListContainer>
    <Content />
    </>
  )
}

export default App
