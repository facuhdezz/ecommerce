const productos = [
    {
        id: 1,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/asus-tuf-FX507ZI-15-6.jpg",
        nombre: "Notebook ASUS TUF FX507ZI",
        precio: 2397,
        moneda: "USD",
        marca: "ASUS"
    },
    {
        id: 2,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/lenovo-3-15-6.jpg",
        nombre: "Notebook LENOVO 3 15IT",
        precio: 697,
        moneda: "USD",
        marca: "LENOVO"
    },
    {
        id: 3,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/kuu-xbook-14-1.jpg",
        nombre: "Notebook KUU XBook",
        precio: 367,
        moneda: "USD",
        marca: "KUU"
    },
    {
        id: 4,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/asus-vivobook-F1502-15-6.jpg",
        nombre: "Notebook ASUS Vivobook F1502",
        precio: 1097,
        moneda: "USD",
        marca: "ASUS"
    },
    {
        id: 5,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/asus-vivobook-X1400-14-0.png",
        nombre: "Notebook ASUS Vivobook X1400",
        precio: 497,
        moneda: "USD",
        marca: "ASUS"
    },
    {
        id: 6,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/hp-omen-16-1.jpg",
        nombre: "Notebook HP OMEN",
        precio: 2297,
        moneda: "USD",
        marca: "HP"
    },
    {
        id: 7,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/hp-victus-15-6.jpg",
        nombre: "Notebook HP Victus Gaming",
        precio: 1597,
        moneda: "USD",
        marca: "HP"
    },
    {
        id: 8,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/msi-thin-15-6.jpg",
        nombre: "Notebook MSI THIN GF63",
        precio: 1509,
        moneda: "USD",
        marca: "MSI"
    },
    {
        id: 9,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/macbook-air-15-3.jpg",
        nombre: "APPLE MacBook Air MQKW3LL/A",
        precio: 2113,
        moneda: "USD",
        marca: "MSI"
    },
    {
        id: 10,
        category: "laptops",
        img: "../src/api/categories/1-laptops/imagenes/macbook-pro-13-3.jpg",
        nombre: "APPLE MacBook PRO MPXU2LL/A",
        precio: 899,
        moneda: "USD",
        marca: "MSI"
    },
    {
        id: 2001,
        category: "gabinetes",
        img: "../src/api/categories/2001-gabinetes/imagenes/MX600RGB-01-w-550x550.jpg",
        nombre: "Gabinete Cougar MX600 RGB",
        precio: 97,
        moneda: "USD",
        marca: "Cougar"
    },
    {
        id: 2002,
        category: "gabinetes",
        img: "../src/api/categories/2001-gabinetes/imagenes/05-3.jpg",
        nombre: "Gabinete Cougar DarkBlader-G",
        precio: 110,
        moneda: "USD",
        marca: "Cougar"
    },
    {
        id: 2003,
        category: "gabinetes",
        img: "../src/api/categories/2001-gabinetes/imagenes/products_panzerevo_rgb-263x300.png",
        nombre: "Gabinete Cougar PANZER EVO RGB ",
        precio: 80,
        moneda: "USD",
        marca: "Cougar"
    },
    {
        id: 2004,
        category: "gabinetes",
        img: "../src/api/categories/2001-gabinetes/imagenes/UNIFACE-RGB-01-2-550x550.jpg",
        nombre: "Gabinete Cougar Uniface RGB",
        precio: 75,
        moneda: "USD",
        marca: "Cougar"
    },
    {
        id: 2005,
        category: "gabinetes",
        img: "../src/api/categories/2001-gabinetes/imagenes/02-3.png",
        nombre: "Gabinete Cougar MX330-G Air",
        precio: 83,
        moneda: "USD",
        marca: "Cougar"
    },
    {
        id: 2006,
        category: "gabinetes",
        img: "../src/api/categories/2001-gabinetes/imagenes/products_darkBlader_x7_green.png",
        nombre: "Gabinete Cougar DarkBlader-X7",
        precio: 85,
        moneda: "USD",
        marca: "Cougar"
    },
    {
        id: 3001,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/gt1030.jpg",
        nombre: "Nvidia GeForce GT 1030",
        precio: 110,
        moneda: "USD",
        marca: "Gigabyte",
        fabricante: "Nvidia",
        caracteristicas: {
            "Memoria": "2GB DDR4",
            "Frecuencia": "1417 MHz"
        },
        stock: "8"
    },
    {
        id: 3002,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/gtx1050.jpg",
        nombre: "Nvidia GeForce GTX 1050 Ti",
        precio: 280,
        moneda: "USD",
        marca: "Asus",
        fabricante: "Nvidia",
        caracteristicas: {
            "Memoria": "4GB DDR5",
            "Frecuencia": "1290 MHz"
        },
        stock: "17"
    },
    {
        id: 3003,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/gtx1660.jpg",
        nombre: "Nvidia GeForce GTX 1660 Super",
        precio: 367,
        moneda: "USD",
        marca: "Zotac",
        fabricante: "Nvidia",
        caracteristicas: {
            "Memoria": "6GB GDDR6",
            "Frecuencia": "1785 MHz"
        },
        stock: "15"
    },
    {
        id: 3004,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/rtx3060.jpg",
        nombre: "Nvidia GeForce RTX 3060",
        precio: 420,
        moneda: "USD",
        marca: "Msi",
        fabricante: "Nvidia",
        caracteristicas: {
            "Memoria": "12GB GDDR6",
            "Frecuencia": "1710 MHz"
        },
        stock: "12"
    },
    {
        id: 3005,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/rtx4090.jpg",
        nombre: "Nvidia GeForce RTX 4090",
        precio: 2600,
        moneda: "USD",
        marca: "Asus",
        fabricante: "Nvidia",
        caracteristicas: {
            "Memoria": "24GB GDDR6X",
            "Frecuencia": "2595 MHz"
        },
        stock: "7"
    },
    {
        id: 3006,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/rx580.jpg",
        nombre: "AMD Radeon RX 580",
        precio: 150,
        moneda: "USD",
        marca: "XFX",
        fabricante: "AMD",
        caracteristicas: {
            "Memoria": "8GB GDDR5",
            "Frecuencia": "1386 MHz"
        },
        stock: "4"
    },
    {
        id: 3007,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/rx6600.jpg",
        nombre: "AMD Radeon RX 6600 XT",
        precio: 250,
        moneda: "USD",
        marca: "Asrock",
        fabricante: "AMD",
        caracteristicas: {
            "Memoria": "8GB GDDR5",
            "Frecuencia": "1850 MHz"
        },
        stock: "12"
    },
    {
        id: 3008,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/rx7800.jpg",
        nombre: "MD Radeon RX 7800 XT",
        precio: 620,
        moneda: "USD",
        marca: "Sapphire",
        fabricante: "AMD",
        caracteristicas: {
            "Memoria": "16GB GDDR6",
            "Frecuencia": "2254 MHz"
        },
        stock: "6"
    },
    {
        id: 3009,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/rx6900.jpg",
        nombre: "AMD Radeon RX 6900 XT Master",
        precio: 1200,
        moneda: "USD",
        marca: "Gigabyte",
        fabricante: "AMD",
        caracteristicas: {
            "Memoria": "16GB GDDR6",
            "Frecuencia": "2448 MHz"
        },
        stock: "3"
    },
    {
        id: 3010,
        category: "graficas",
        img: "../src/api/categories/3001-graficas/imagenes/rtx5000.jpg",
        nombre: "NVIDIA Quadro RTX 5000 ",
        precio: 950,
        moneda: "USD",
        marca: "Pny",
        fabricante: "Nvidia",
        caracteristicas: {
            "Memoria": "16GB GDDR6"
        },
        stock: "1"
    },
    {
        id: 4001,
        category: "monitores",
        img: "../src/api/categories/4001-monitores/imagenes/acer24p.jpg",
        nombre: "Monitor LCD Acer 24” VGA",
        precio: 82,
        moneda: "USD",
        marca: "Acer",
        caracteristicas: {
            "Tamaño": "24 pulgadas panorámica",
            "Resolución": "nativa 1920 x 1080",
            "Tiempo de respuesta": "5ms"
        },
        stock: "12"
    },
    {
        id: 4002,
        category: "monitores",
        img: "../src/api/categories/4001-monitores/imagenes/perseo23-8p.jpg",
        nombre: "Monitor Perseo 23.8” Fhd 165 Hz",
        precio: 186,
        moneda: "USD",
        marca: "Perseo",
        caracteristicas: {
            "Tamaño": "23.8 pulgadas de area visible",
            "Resolución": "1920 x 1080",
            "Tiempo de respuesta": "1ms"
        },
        stock: "7"
    },
    {
        id: 4003,
        category: "monitores",
        img: "../src/api/categories/4001-monitores/imagenes/viewsonic27.jpg",
        nombre: "ViewSonic VA2747-MHJ - Monitor LED - 27” - 1920 x 1080 Full HD",
        precio: 240,
        moneda: "USD",
        marca: "ViewSonic",
        caracteristicas: {
            "Tamaño": "27 pulgadas",
            "Resolución": "1920 x 1080 Full HD",
            "Tiempo de respuesta": "5ms"
        },
        stock: "5"
    },
    {
        id: 4004,
        category: "monitores",
        img: "../src/api/categories/4001-monitores/imagenes/lenovo23-8.jpg",
        nombre: "MONITOR LENOVO THINKVISION P24Q-30 23.8” QHD",
        precio: 360,
        moneda: "USD",
        marca: "Lenovo",
        caracteristicas: {
            "Tamaño": "23.8 pulgadas de area visible",
            "Resolución": "2560 x 1440",
            "Tiempo de respuesta": "4ms"
        },
        stock: "6"
    },
    {
        id: 4005,
        category: "monitores",
        img: "../src/api/categories/4001-monitores/imagenes/samsung27.jpg",
        nombre: "Monitor Samsung G4 27” Full HD 240 Hz",
        precio: 476,
        moneda: "USD",
        marca: "Samsung",
        caracteristicas: {
            "Tamaño": "27 pulgadas",
            "Resolución": "1920 x 1080",
            "Tiempo de respuesta": "1ms"
        },
        stock: "4"
    },
    {
        id: 4006,
        category: "monitores",
        img: "../src/api/categories/4001-monitores/imagenes/msi34.jpg",
        nombre: "Monitor Gamer Curvo MSI Optix G32CQ4 | WQHD, 31.5”",
        precio: 785,
        moneda: "USD",
        marca: "Msi",
        caracteristicas: {
            "Tamaño": "34 pulgadas",
            "Resolución": "2560 x 1440",
            "Tiempo de respuesta": "1ms"
        },
        stock: "2"
    }
]

export default productos;