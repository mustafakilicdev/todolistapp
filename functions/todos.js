/* 
    Return A list of All the To Do Items
    {
        statuscode:200,
            {name:"to do list"}
        body:JSON.stringify({name:"to do list"})
        body:{"name":"to do list"}
    }
*/

export async function handler(event, context) {
    
    return{
        statusCode: 200,
        body: JSON.stringify({path:"/api/todos"})
    }
}