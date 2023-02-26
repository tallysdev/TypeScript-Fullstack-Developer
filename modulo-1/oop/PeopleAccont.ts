import { DioAccont } from "./DioAccont"

export class PeopleAccont extends DioAccont {
    doc_id: number

    constructor(name: string, accontNumber: number, doc_id: number) {
        super(name, accontNumber)
        this.doc_id = doc_id
    }
}