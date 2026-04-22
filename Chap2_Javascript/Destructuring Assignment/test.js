console.log("Hello world Moriarty")

// ___________________________________________________________
const user = {
    name: "Moriarty",
    age: 22,
    address: "Ha Noi"
}

// Cach viet truyen thong
// const name = user.name;
// const age = user.age;
// const address = user.address;

// Cach viet destructuring object
const { name, age, address } = user;

console.log("name: ", name, "age: ", age, "address: ", address)
// ________________________________________________________________

const level = ["internship", "fresher", "junior", "middle", "senior"]

// Cach truyen thong
// const a = level [0]
// const b = level [4]

// Cach viet destructuring array
const [a, , , , b] = level

console.log("level[0]: ", a, "level[4]: ", b)