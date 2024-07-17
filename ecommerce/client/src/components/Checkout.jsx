import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const Checkout = () => {
    initMercadoPago('YOUR_PUBLIC_KEY', {
        locale: 'es-UY'
    });

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState();

    const { cart, clearCart, totalPrice } = useContext(CartContext);
    const envio = 5;
    console.log(cart);

    const buy = async () => {
        const orderData = cart.map(product => ({title:product.nombre, quantity:product.cantidad, unit_price:product.precio}))

        try {const response = await fetch('http://localhost:3000/create_preference', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        })

        const preference = await response.json()
        createCheckoutButton(preference.id)} catch(err) {
            alert(err)
        }
    }

    const createCheckoutButton = (preferenceId) => {
        const renderComponent = () => {            
            <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />
        }

        renderComponent()
    }

    const generarOrden = () => {
        if(nombre.length === 0 || email.length === 0 || telefono.length === 0) {
            alert("Complete todos los campos");
            return false;
        };

        if(cart.length === 0) {
            alert("No se encontraron productos");
            return false;
        };

        const buyer = {
            name: nombre,
            email: email,
            phone: telefono
        };

        const items = cart.map(product => ({id:product.idx, title:product.nombre, price:product.precio, quantity:product.cantidad}));
        console.log(items);
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = totalPrice() + envio;
        const order = {buyer:buyer, items:items, date:date, total:total};

        const db = getFirestore();
        const ordersCol = collection(db, "orders");
        addDoc(ordersCol, order).then(result => {
            clearCart();
            setOrderId(result.id);
        });
    };

    return (
        <section className="cartPage">
            <h1 className="titulos text-center">Checkout</h1>
            <div>
                <div>
                    {orderId ? <div>
                        <h1>Gracias por confiar en NetShop</h1>
                        <p>Tu ID de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
            <article>
                <div className="tabla" style={{width: "120%"}}>
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product => (
                                <tr key={product.id}>
                                    <th><Link to={"/item/" + product.id}>{product.nombre}</Link></th>
                                    <th>{product.moneda} {product.precio}</th>
                                    <th>{product.cantidad}</th>
                                    <th>{product.moneda} {product.precio * product.cantidad}</th>
                                </tr>
                            ))}
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Sub Total:</th>
                                <th>USD {totalPrice()}</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Costo de envío:</th>
                                <th>USD {envio.toFixed(2)}</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Total:</th>
                                <th>USD {totalPrice() + envio}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="order">
                    <div className="cartTotal d-flex flex-column gap-4">
                        <div>
                            <label>Nombres</label>
                            <input type="text" onInput={(event) => {setNombre(event.target.value)}}/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" onInput={(event) => {setEmail(event.target.value)}}/>
                        </div>
                        <div>
                            <label>Teléfono</label>
                            <input type="text" onInput={(event) => {setTelefono(event.target.value)}}/>
                        </div>
                        <div className="btnEnd">
                            <button type="button" className="btnCart" onClick={generarOrden}>Generar orden</button>
                        </div>
                    </div>
                </div>
            </article>
            <div id="wallet_container"></div>
        </section>
    );
}

export default Checkout;