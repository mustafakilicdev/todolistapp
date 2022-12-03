/* 
    Make a connection between client and server(cloud function)
    fetch(url)

    Path to all your function
    DOCS for any service will tell you how to access the function cloud function from the client(web browser)(firebase)
    /.netlify/functions/fn(name)
    /.netlify/functions/todos       path        route       function todos.js
    


    */

async function getToDos(){
    //GET request
    const url = '/.netlify/functions/todos'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    document.querySelector('#tagline').textContent = data
}
getToDos()