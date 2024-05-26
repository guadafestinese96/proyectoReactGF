# **WIDISTOREOK**

## **Página de venta de perfumes**

### Colaboradores: 
- Guadalupe Festinese

### Contacto:

- [INSTAGRAM](https://www.instagram.com/widistoreok__/) 
- [WHATSAPP](https://api.whatsapp.com/send/?phone=1161950112&text&type=phone_number&app_absent=0) 



## **¿Cómo ejecutar este programa?**

Para ejecutar el programa se debe abrir la consola y ejecutar el comando ***npm run dev*** , luego ***ctrl*** + click en el link de **localhost** que nos brinda el programa.

## **Secciones de la página**

1) Inicio: esta sección muestra el listado completo de perfumes de hombre y mujer de todas las marcas. 
2) Paco rabanne: esta sección muestra sólo los perfumes de dicha marca.
3) Dior: esta sección muestra sólo los perfumes de dicha marca.
4) Armani: esta sección muestra sólo los perfumes de dicha marca.
5) Carrito: esta sección muestra los productos que agregamos al carrito.
6) Checkout: esta sección nos permite finalizar la compra e ingresar los datos correspondientes del cliente.

## **¿Cómo comprar un perfume?**
Para simular la compra de un perfume, debemos ingresar a cada perfume individualmente, y allí dicho componente nos permitirá poder sumar cierta cantidad de unidades según el stock lo permita, y agregarlas al carrito. Luego desde la sección de carrito podremos corroborar si están los productos correspondientes ingresados y desde allí clickeando el botón de ***terminar compra*** podremos dirigirnos a la sección de checkout donde ingresaremos los datos para finalizar la compra.

Si deseamos buscar un perfume por ID, podemos realizarlo ingresando en la ruta correspondiente /item/idDelPerfume.

Tenemos la base de datos del stock disponible cargado en la plataforma [**Firebase**](https://console.firebase.google.com/u/0/project/widistorefbreact/firestore/databases/-default-/data/~2Fperfumes~2FNzkMmRdyL2j1l2Diy92a?hl=es) .

En el **footer** se encuentran 3 íconos que redirigen a sus respectivas páginas. Por un lado el de ***whatsapp***, por otro lado el de ***instagram*** y también el de ***ubicación*** que redirige a la página de google maps correspondiente a la ubicación del local.