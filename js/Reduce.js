//Executa uma função para cada elemento retornando um único valor de retorno
const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marron',
        age: 2,
        weight: 2
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 1
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 12
    }
]

const totalWeight = pets.reduce((total, pet)=>{
    return total + pet.weight
}, 0)
console.log(totalWeight);

const totalAge = pets.reduce((total, pet)=>{
    return total + pet.weight
}, 0)
console.log(totalAge);
