export abstract class DioAccont {
    private name: string
    accontNumber: number
    balance: number = 0
    private status: boolean = false

    constructor(name: string, accontNumber: number) {
        this.name = name
        this.accontNumber = accontNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log("New name save")
    }

    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if (this.validateStatus()) {
        console.log("Voce está depositando")
        }
    }

    withdraw = (): void => {
        console.log("Voce está sacando")
    }

    getBalance = (): void => {
        this.balance = 20
    }

    validateStatus = ():boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error("Conta invalida")
    }
}