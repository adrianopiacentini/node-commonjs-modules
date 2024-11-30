const fullName = require('./names.js')
const hobbies = require('./hobbies.js')
// console.log(fullName('Adriano', 'Piacentini'), hobbies('prova', 'debug', 'test'))

const createFullName = fullName('Adriano', 'Piacentini')
const createHobbies = hobbies('prova', 'test', 'debug')
// console.log(createFullName, createHobbies)


function profile() {
    return {
        fullName: `${createFullName.firstName} ${createFullName.lastName}`,
        hobbies: createHobbies.hobbies.join(', ')
    }
}
console.log(profile())