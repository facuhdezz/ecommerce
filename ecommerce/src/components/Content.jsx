import Gabinete from '../assets/img/gabinete1.jpg'
import Laptop from '../assets/img/laptop1.jpg'
import Monitor from '../assets/img/monitor1.jpg'
import Procesador from '../assets/img/procesador1.jpg'
import Motherboard from '../assets/img/motherboard1.jpg'
import Mouse from '../assets/img/mouse1.jpg'
// import Ram from '../assets/img/ram1.jpg'
import Grafica from '../assets/img/grafica1.jpg'
// import Equipos from '../assets/img/equipos1.jpg'
import Card from './Card'

const Content = () => {
    return (
        <section className="grid">
            <Card img={Procesador} description={"Procesadores"} id={"procesador"}/>
            <Card img={Gabinete} description={"Gabinetes de PC"} id={"gabinete"}/>
            <Card img={Grafica} description={"Tarjetas Gráficas"} id={"grafica"}/>
            <Card img={Mouse} description={"Periféricos"} id={"mouse"}/>
            <Card img={Motherboard} description={"Motherboards"} id={"motherboard"}/>
            <Card img={Monitor} description={"Monitores"} id={"monitor"}/>
            <Card img={Laptop} description={"Laptops"} id={"laptop"}/>
            {/* <Card img={Ram} description={"Ram"} id={"ram"}/> */}
            {/* <Card img={Equipos} description={"Equipos"} id={"equipos"} /> */}
        </section>
    )
}

export default Content;