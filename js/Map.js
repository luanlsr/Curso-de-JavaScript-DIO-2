//Chama o callback para cada elemento e devolve um novo array com a mesma quantidade de items
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
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 12
    }

]
console.log(pets);

const petNames = pets.map((pet) =>{
    return pet.name
})

console.log(petNames);

const petType = pets.map((pet) =>{
    return pet.type
})

console.log(petType);

const petAge = pets.map((pet) =>{
    return pet.age
})

console.log(petAge);

const petWeight = pets.map((pet) =>{
    return pet.weight
})

console.log(petWeight);