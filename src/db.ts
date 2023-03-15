let db = [
    {
        id: "1",
        content: "note1",
        isActive: true
    }
]

interface ToDo {
 id: String;
 content: String
 isActive: Boolean
}

export {ToDo, db as default}