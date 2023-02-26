import { DioAccont } from "./DioAccont"

class companyAccont extends DioAccont {

    constructor(name, accontNumber) {
        super(name, accontNumber)
    }

    getLoan = (): void => {
        console.log("Voce pegou um emprestimo")
    }
}