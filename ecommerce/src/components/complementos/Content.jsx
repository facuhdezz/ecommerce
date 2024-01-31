import Gabinete from '../../assets/img/gabinete1.jpg'
import Laptop from '../../assets/img/laptop1.jpg'
import Monitor from '../../assets/img/monitor1.jpg'
import Procesador from '../../assets/img/procesador1.jpg'
import Motherboard from '../../assets/img/motherboard1.jpg'
import Mouse from '../../assets/img/mouse1.jpg'
import Grafica from '../../assets/img/grafica1.jpg'
import Card from './Card'

const Content = () => {
    return (
        <section className="categorias">
            <h1 className="titulos">Descubrí</h1>
            <div className="grid">
                <Card img={Procesador} description={"Procesadores"} id={"procesador"} link={"procesadores"} />
                <Card img={Gabinete} description={"Gabinetes de PC"} id={"gabinete"} link={"gabinetes"} />
                <Card img={Grafica} description={"Tarjetas Gráficas"} id={"grafica"} link={"graficas"} />
                <Card img={Mouse} description={"Periféricos"} id={"mouse"} link={"perifericos"} />
                <Card img={Motherboard} description={"Motherboards"} id={"motherboard"} link={"motherboards"} />
                <Card img={Monitor} description={"Monitores"} id={"monitor"} link={"monitores"} />
                <Card img={Laptop} description={"Laptops"} id={"laptop"} link={"laptops"} />
            </div>
        </section>
    )
}

export default Content;