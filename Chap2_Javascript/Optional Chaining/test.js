// Optional Chaning with variable
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
}

console.log(adventurer.cat.name) // return Dinah
// console.log(adventurer.dog.name) // error
console.log(adventurer?.dog?.name) // Return undefined
// Syning default value 
const dogName = adventurer?.dog?.name ?? 'Mic' // if ok return name, if not return 'Mic'
console.log(">>> Check dogName: ", dogName)

// Optional Chaning with function 
// const arr1 = [1, 2, 3] // This case is ok 
const arr1 = null // If not use Optional Chaning -> Error

const arr2 = arr1?.map(item => item * 2)

console.log('>>>> Check arr2 = ', arr2, ' Check arr1 =  ', arr1)
