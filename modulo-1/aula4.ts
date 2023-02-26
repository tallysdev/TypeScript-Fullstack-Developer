// Dio bankgin
import { PeopleAccont } from "./oop/PeopleAccont"
import { CompanyAccont } from "./oop/CompanyAccont"


const newCont: PeopleAccont = new PeopleAccont("Tallys", 1, 2)
console.log(newCont)
const newCompany: CompanyAccont = new CompanyAccont("DIO", 1)
newCompany.deposit()