import { DioAccont } from "./DioAccont"

export class CompanyAccont extends DioAccont {

    constructor(name: string, accontNumber:number) {
        super(name, accontNumber)
    }

    getLoan = (): void => {
        console.log("Voce pegou um emprestimo")
    }

    deposit = (): void => {
        console.log(this.name, "está despositando")
    }
}