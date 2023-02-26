import { DioAccont } from "./DioAccont"

class companyAccont extends DioAccont {

    constructor(name, accontNumber) {
        super(name, accontNumber)
    }

    getLoan = () => {
        console.log("Voce pegou um emprestimo")
    }
}