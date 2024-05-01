const perfumes = [
    {
        id: 1,
        marca: "Paco Rabanne",
        nombre: "One Million",
        precio: 26000,
        genero: "Masculino",
        stock: 8,
        image: "../src/Perfumes/oneMillion.jpg"
    },
    {
        id: 2,
        marca: "Paco Rabanne",
        nombre: "Lady Million",
        precio: 26000,
        genero: "Femenino",
        stock: 2,
        image: "../src/Perfumes/ladyMillion.jpg"
    },
    {
        id: 3,
        marca: "Paco Rabanne",
        nombre: "Black XS L'excess",
        genero: "Masculino",
        precio: 26000,
        stock: 5,
        image: "../src/Perfumes/blackXsLexcessH.jpg"
    },
    {
        id: 4,
        marca: "Paco Rabanne",
        nombre: "Black XS L'Excess",
        genero: "Femenino",
        precio: 26000,
        stock: 1,
        image: "../src/Perfumes/blackXsLexcessM.jpg"
    },
    {
        id: 5,
        marca: "Paco Rabanne",
        nombre: "Pure XS",
        genero: "Masculino",
        precio: 26000,
        stock: 2,
        image: "../src/Perfumes/pureXsH.jpg"
    },
    {
        id: 6,
        marca: "Paco Rabanne",
        nombre: "Pure XS",
        genero: "Femenino",
        precio: 26000,
        stock: 1,
        image: "../src/Perfumes/pureXsM.jpg"
    },
    {
        id: 7,
        marca: "Paco Rabanne",
        nombre: "Black XS",
        genero: "Masculino",
        precio: 26000,
        stock: 5,
        image: "../src/Perfumes/blackXsH.jpg"
    },
    {
        id: 8,
        marca: "Paco Rabanne",
        nombre: "Black XS",
        genero: "Femenino",
        precio: 26000,
        stock: 5,
        image: "../src/Perfumes/blackXsM.jpg"
    }
]

export const getPerfumes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(perfumes);
            console.log(perfumes);
        }, 2000);
    })

}