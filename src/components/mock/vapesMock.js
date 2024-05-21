const vapes = [
    {
        idVape: 1,
        marca: "Elfbar",
        idMarca: "elfbar",
        nombre: "Blackberry Cranberry",
        precio: 25000,
        stock: 2,
        image: "cranberry.png",
    },
    {
        idVape: 2,
        marca: "Elfbar",
        idMarca: "elfbar",
        nombre: "Strawberry Ice",
        precio: 25000,
        stock: 4,
        image: "strawberryIce.png",
    }
    ,{
        idVape: 3,
        marca: "Elfbar",
        idMarca: "elfbar",
        nombre: "Strawberry Banana",
        precio: 25000,
        stock: 3,
        image: "strawberryBanana.png",
    }
    ,{
        idVape: 4,
        marca: "Elfbar",
        idMarca: "elfbar",
        nombre: "Red Berry Cherry",
        precio: 25000,
        stock: 5,
        image: "redBerryCherry.png",
    }
]

export const getVapes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vapes);
            //console.log(vapes);
        }, 2000);
    })

}

export const getVapesById = (id) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(vapes.find((vape)=> vape.id === id))
        }, 2000);
    })
}