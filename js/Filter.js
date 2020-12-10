//Cria um novo array com todos os elementos que passaram no teste da função fornecida 
// var newArray = arr.filter(callback[,thisArg])
//array.prototype.filter()
const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
]

const newPets = pets.filter((pet) => {
    return pet.age > 5
})
console.log(pets);
console.log(newPets);

