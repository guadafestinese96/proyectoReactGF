const perfumes = [
    {
        id: 1,
        marca: "Paco Rabanne",
        nombre: "One Million",
        precio: 26000,
        genero: "Masculino",
        stock: 8,
        image: "../src/Perfumes/oneMillion.jpg",
        femenino: false,
    },
    {
        id: 2,
        marca: "Paco Rabanne",
        nombre: "Lady Million",
        precio: 26000,
        genero: "Femenino",
        stock: 2,
        image: "../src/Perfumes/ladyMillion.jpg",
        femenino: true,
    },
    {
        id: 3,
        marca: "Paco Rabanne",
        nombre: "Black XS L'excess",
        genero: "Masculino",
        precio: 26000,
        stock: 5,
        image: "../src/Perfumes/blackXsLexcessH.jpg",
        femenino: false,
    },
    {
        id: 4,
        marca: "Paco Rabanne",
        nombre: "Black XS L'Excess",
        genero: "Femenino",
        precio: 26000,
        stock: 1,
        image: "../src/Perfumes/blackXsLexcessM.jpg",
        femenino: true,
    },
    {
        id: 5,
        marca: "Paco Rabanne",
        nombre: "Pure XS",
        genero: "Masculino",
        precio: 26000,
        stock: 2,
        image: "../src/Perfumes/pureXsH.jpg",
        femenino: false,
    },
    {
        id: 6,
        marca: "Paco Rabanne",
        nombre: "Pure XS",
        genero: "Femenino",
        precio: 26000,
        stock: 1,
        image: "../src/Perfumes/pureXsM.jpg",
        femenino: true,
    },
    {
        id: 7,
        marca: "Paco Rabanne",
        nombre: "Black XS",
        genero: "Masculino",
        precio: 26000,
        stock: 5,
        image: "../src/Perfumes/blackXsH.jpg",
        femenino: false,
    },
    {
        id: 8,
        marca: "Paco Rabanne",
        nombre: "Black XS",
        genero: "Femenino",
        precio: 26000,
        stock: 5,
        image: "../src/Perfumes/blackXsM.jpg",
        femenino: true,
    }
]

export const getPerfumes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(perfumes);
            //console.log(perfumes);
        }, 2000);
    })

}

export const getPerfumesById = (id) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(perfumes.find((perfume)=> perfume.id === id))
        }, 2000);
    })
}

export const getPerfumesByGenero = (genero) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(perfumes.filter((perfume)=> perfume.genero === genero))
        }, 2000);
    })
}