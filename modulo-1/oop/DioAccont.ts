export abstract class DioAccont {
    name: string
    accontNumber: number
    balance: number = 0

    constructor(name: string, accontNumber: number) {
        this.name = name
        this.accontNumber = accontNumber
    }

    deposit = (): void => {
        console.log("Voce está depositando")
    }

    withdraw = (): void => {
        console.log("Voce está sacando")
    }

    getBalance = (): void => {
        this.balance = 20
    }
}