import { categoryTemplates  } from "./templates/categories";

async function appInit() {
    const res = await fetch('.netlify/functions/todos')
    console.log(res.body)
    const todos = await res.json()
    const containerElement = document.createElement('div')
    let markup = ``
    todos.forEach(todo => {
        const template = categoryTemplates[todo.category](todo)
        markup += template
    });
    containerElement.innerHTML = markup
    document.querySelector('main').append(containerElement)
}


appInit()