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
    deleteToDo(_: any, {id}: {id: String}, {db}: {db: ToDo[]}) {
        const foundItem = db.find(item => item.id === id)
        if(!foundItem) {
            throw new Error('ToDo not found')
        }
        db = db.filter(item => item.id !== id)
        console.log(db);
        console.log(foundItem);
        
        return foundItem
    },
    updateToDo(_: any, {id, data}: {id: String, data: any}, {db}: {db: ToDo[]}) {
        const foundItem = db.find(item => item.id === id)
        if(!foundItem) {
            throw new Error('ToDo not found')
        }
        foundItem.content = data.content
        foundItem.isActive = data.content
        return foundItem
    },
}

export default Mutation