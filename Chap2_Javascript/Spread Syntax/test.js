//array__________________________________________
const arr1 = [1, 2, 3]

// const arr2 = arr1.push(5) // return int

// Cach khac phuc truong hop tren
// arr1.push(5)
// const arr2 = arr1

// Cach dung spread syntax cho array
const arr2 = [...arr1, 5]

console.log(">>> check array 1 = ", arr1, ">>> check array 2 = ", arr2)
// _______________________________

// Object
// const first_person = {
//     name: "Jack",
//     age: 24,
// }
// const second_person = { ...first_person };
// second_person.age = 25;
// console.log(">>> Check person 1 age: ", first_person.age); // output: 24
// console.log(">>> Check person 2 age: ", second_person.age); // output: 25

// Spread Syntax không hoạt động được với nested object 
const first_person = {
    name: "Jack",
    age: 24,
    address: {
        apartment: "A",
        city: "London"
    }
};
const second_person = { ...first_person };
second_person.age = 25;
second_person.address.apartment = "N";
console.log(">>> person 1: ", first_person); // output: N
console.log(">>> person 2: ", second_person); // output: N

