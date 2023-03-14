import { ToDo } from "../db"
import {v4 as uuidv4} from 'uuid'

const Mutation = {
    createToDo(_: any, {data}: {data: ToDo}, {db}: {db: ToDo[]}) {
        const newToDo = {
            id: uuidv4(),
            content: data.content,
            isActive: data.isActive
        }

        db.push(newToDo)
        return newToDo
    },
}

export default Mutation