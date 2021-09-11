//map
//add properties to an object in an array
const users = [
    {
        name:"Nicola Di Candia",
        age: 22
    },
    {
        name:"Andres Carrillo",
        age: 22
    },
    {
        name:"Ana Vega",
        age: 23
    },
]

const userswithStatus = users.map(
    u => ({
        ...u,
        status: u.age >= 18 ? "18+" : null,
    }))