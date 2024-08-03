
const names = ["lulu",  "lala", "lili"];
const ages = [20,18, 40]
const address = ["jakarta", "bogor", "bandung"]




// "lala", "lili"

// push => tambah data di paling akhir
// unshift => tambah data di depan

// pop => hapus data di paling akhir
// shift => hapus data di paling awal

// names.push("john")
// names.unshift("doe")
// names.pop()
// names.shift()

// names.splice(1,0, "john", "doe")

// const newNames = names.slice(1, 3)

// console.log(names);

// ForEach => perulangan / looping
// names.forEach((name) => {
//     console.log(name);
// })

// Map => looping manipulation
// ["lulu",  "lala", "lili"]
// ["1. lulu",  "2. lala", "3. lili"]

// const newNames = names.map((name, index) => {
//     return `${index + 1}. ${name}`
// })

// Filter
// ["lulu",  "lala", "lili"]

// const newNames = names.filter((name) => {
//     return name == "lala"
// })

// console.log(newNames);

const randomNumbers = [42, 85, 13, 67, 29, 74, 53, 91, 38, 7, 62, 24, 81, 49, 93, 5, 56, 17, 36, 88];

// 20 - 50

const newNumbers = randomNumbers.filter((number) => {
    return number >= 20 && number <= 50
})

console.log(newNumbers);

