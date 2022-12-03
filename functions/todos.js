/* 
    Return A list of All the To Do Items
    {
        statuscode:200,
            {name:"to do list"}
        body:JSON.stringify({name:"to do list"})
        body:{"name":"to do list"}
    }
*/
import path from 'path'
import fs from 'fs/promises'

export async function handler(event, context) {
    const filePath = path.resolve('./db/todos.json')
    //stream buffer
    const data = await fs.readFile(filePath, "utf-8")
    return{
        statusCode: 200,
        body: data
    }
}