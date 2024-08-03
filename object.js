// Object => Orang
// nama, umur, alamat, tinggi, bb, menikah, pendidikan
const people = {
    name: "lulu",
    age: 20,
    address: "jakarta",
    height: 170,
    weight: 60,
    isMerried: false
}

people.age = 32
people.name = "Lili"
people.isMerried = true

people.school = "SMA"

delete people.height

console.log(people);