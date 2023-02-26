export abstract class DioAccont {
    name: string
    accontNumber: number
    balance: number = 0

    constructor(name: string, accontNumber: number) {
        this.name = name
        this.accontNumber = accontNumber
    }

    deposit = () => {
        console.log("Voce está depositando")
    }

    withdraw = () => {
        console.log("Voce está sacando")
    }

    getBalance = () => {
        this.balance = 20
    }
}