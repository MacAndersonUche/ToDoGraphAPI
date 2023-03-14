import { ToDo } from "../db"

const Query = {
    todos(_: any, {id}: {id: string}, {db}: {db: ToDo[]}) {
        if(!id) {
            return db
        }

        return db.filter(todo => todo.id === id)
    }
}

export default Query