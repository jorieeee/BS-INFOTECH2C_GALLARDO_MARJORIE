

const person = {
    firstName: "Andy",
    lastName: "Nieves",
    age: 35,
    nationality: "Fil",
    address: {
        purok: "2",
        barangay: "bangantalinga",
        city: "Iba",
        province: "Zambales"
    }
}




const date = new Date()

const num1 = 3.9
const num2 = "3.1"


const value = "acbdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
const len = 16

let password = ""
for (let i = 0; i < len; i++) {
    const randomNumber = Math.floor(Math.random() * value.length)
    password += value.charAt(randomNumber)
}

const arrNumbers = [1, 2, 3, 4, 5]


const persons = [
    {
        id: 0,
        firstName: "Andy",
        lastName: "Nieves",
        selectedColor: [
            "red",
            "blue",
            "yellow"
        ]
    },
    {
        id: 1,
        firstName: "Dan",
        lastName: "Bachillar",
        selectedColor: [
            "blue",
        ]
    },
    {
        id: 2,
        firstName: "Fiel",
        lastName: "Dullas",
        selectedColor: [
            "yellow"
        ]
    }
]


function displayNames(func) {
    persons.forEach(person => {
        func(person)
    })
}

const func = (person) => {
    console.log("Fullname", `${person.firstName} ${person.lastName}`)
}



const age = 18

if (age >= 15 && age < 18) {
    console.log("SK Voter")
} else if (age >= 18 ) {
    console.log("Brgy Voter")
} else {
    console.log("Non voter")
}

switch(age) {
    case age < 15:
        console.log("SWITCH Non voter")
        break
    case age >= 15 && age <= 17:
        console.log("SWITCH SK Voter")
        break;
    case age >= 18:
        console.log("SWITCH Brgy Voter")
        break;
    default:
        console.log("SWITCH Non voter")
}