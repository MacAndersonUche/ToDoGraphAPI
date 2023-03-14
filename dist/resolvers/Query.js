"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Query = {
    todos(_, { id }, { db }) {
        if (!id) {
            return db;
        }
        return db.filter(todo => todo.id === id);
    },
    me() {
        return "hey";
    }
};
exports.default = Query;
