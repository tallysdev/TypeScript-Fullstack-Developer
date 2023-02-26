// Dio bankgin
import { PeopleAccont } from "./oop/PeopleAccont"
import { CompanyAccont } from "./oop/CompanyAccont"


const newCont: PeopleAccont = new PeopleAccont("Tallys", 1, 2)
console.log(newCont)
// newCont.setName("Tallys aureliano")
// console.log(newCont)
// console.log(newCont.getName())
newCont.deposit()
// const newCompany: CompanyAccont = new CompanyAccont("DIO", 1)
// newCompany.deposit()