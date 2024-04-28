const perfumes = [
{
    id: 1,
    marca: "Paco Rabanne",
    nombre: "Lady Million",
    precio: 26000,
    stock: 2,
    image: "../src/Perfumes/ladyMillion.jpg"
},
{
    id: 2,
    marca: "Paco Rabanne",
    nombre: "Black XS L'Excess Femenino",
    precio: 26000,
    stock: 1,
    image: "../src/Perfumes/blackXsLexcessM.jpg"
},
{
    id: 3,
    marca: "Paco Rabanne",
    nombre: "One Million",
    precio: 26000,
    stock: 8,
    image: "../src/Perfumes/oneMillion.jpg"
},
{
    id: 4,
    marca: "Paco Rabanne",
    nombre: "Black XS L'excess Masculino",
    precio: 26000,
    stock: 5,
    image: "../src/Perfumes/blackXsLexcessH.jpg"
}
]

export const getPerfumes = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(perfumes);
            console.log(perfumes);
        }, 2000);
    })
    
}