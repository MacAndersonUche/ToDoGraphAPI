"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Mutation = {
    createToDo(_, { data }, { db }) {
        const newToDo = {
            id: (0, uuid_1.v4)(),
            content: data.content,
            isActive: data.isActive
        };
        db.push(newToDo);
        return newToDo;
    },
    deleteToDo(_, { id }, { db }) {
        const foundItem = db.find(item => item.id === id);
        if (!foundItem) {
            throw new Error('ToDo not found');
        }
        db = db.filter(item => item.id !== id);
        return foundItem;
    },
    updateToDo(_, { id, data }, { db }) {
        const foundItem = db.find(item => item.id === id);
        if (!foundItem) {
            throw new Error('ToDo not found');
        }
        foundItem.content = data.content;
        foundItem.isActive = data.content;
        return foundItem;
    },
};
exports.default = Mutation;
