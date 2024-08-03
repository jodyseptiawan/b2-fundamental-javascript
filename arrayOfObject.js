// Object didalam Array

// 39 Siswa
// nama, nis, alamat, tanggal, tinggi
// bod = Birth Of Day

const siswa1 = {
    name: "",
    nis: "",
    address: "",
    bod: "",
    height: ""
}

const siswaKelas3A = [
    {
        name: "Siswa 1",
        nis: "001",
        address: "rumah 1",
        bod: "1 januari 2003",
        height: 160
    },
    {
        name: "Siswa 2",
        nis: "002",
        address: "rumah 2",
        bod: "2 januari 2003",
        height: 162
    },
    {
        name: "Siswa 3",
        nis: "003",
        address: "rumah 3",
        bod: "3 januari 2003",
        height: 163
    },
]

siswaKelas3A.forEach((siswa) => {
    console.log(siswa.name);
})

// console.log(siswaKelas3A.length);

// for (let i = 0; i < siswaKelas3A.length; i++) {
//     const siswa = siswaKelas3A[i]

//     console.log(siswa.name);
// }

{
    "name": "Belajar Javascript",
    "price": 90000000,
    "tax": 12.5,
    "desc": "Ayo belajar",
    "userId": 12
}