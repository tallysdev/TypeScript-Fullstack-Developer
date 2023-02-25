// Objetos e classes

const tallys = {
    name: "aureliano",
    age: 12
}

console.log(tallys)

class User {
    name: string = "Tallys"
    age: number = 19

    constructor(name: string, age: number) {
        this.name = name,
        this.age = age
    }

    showName = () => {
        console.log(this.name, this.age)
    }
}

const us = new User("Aureliano", 29)
us.showName()

