# Juggler To Do List App
This is a basic to do list web application developed using ```ES Modules``` and use ```Vite.js``` for rapid development. 


## Pre Flight Check In
- Ready the latest version of your to do app in VS Code.
- Update your files with those provided in the updates folder. Simply drag and drop the files into your to do application folder.
- Open the categories.js and the index.js files.
- Make sure your todo.html file has the index.js file linked in the head as type module
- Install the date-fns library using ```npm install date-fns```
- Run ```npx netlify dev``` if your asked to update netlify cli then run the command ```npm i -D netlify-cli```

## Category Template
```html
    <section class="border-l-8 border-blue-500/80 py-4 px-5   mb-1 bg-white mx-auto  ">
    <header class="flex items-center justify-between">
      <h2 class="font-semibold text-[10px] text-blue-600/80  bg-blue-50 px-2 py-0.5 rounded-md   w-fit" >
     Home <span class="">${status}</span>
      </h2>
      <button>
        <svg
          class="w-5 h-5 fill-slate-500"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          ></path>
        </svg>
      </button>
    </header>


    
      <p class="text-[12px] text-slate-500 pt-3">${todo}</p>
    


 
     <footer>
     <ul class="my-2 text-[11px]" >
     <li  >
       <span class="text-slate-700 font-bold">Started </span> <span class=" text-slate-800">${dateFormatter(startDate)}</span>
     </li>
     <li >
       <span class="text-slate-700 font-bold">Finish </span> <span class=" text-slate-800">${dateFormatter(endDate)}</span>
     </li>
   </ul>
   </footer>
  
  </section>
```
   

## NETLIFY COMMANDS
development build
```bash
  npx netlify dev
```

remote development build
```bash
  npx netlify deploy --build
```

going live on the internet may ask you to pick a repo to build...
```bash
  npx netlify deploy --build --prod
```



## GIT COMMAND LINE

```
   git add . 
   git commit -m "commit message"
   git push origin main

```




## Netlify Config File Settings

```toml
 [functions]
  node_bundler = "esbuild"
  directory = "functions/"
  included_files = ["./db/**.json"]

[dev]
  port = 3000
  publish = "dist"

  [[redirects]]
  from = "/api/todos"
  to = "/.netlify/functions/todos"
  status = 200

  [[redirects]]
  from = "/"
  to = "/index.html"
  status = 200


  #  [[redirects]]
  # from = "/todolist"
  # to = "/todolist.html"
  # status = 200

  #   [[redirects]]
  # from = "/todolist.html"
  # to = "/todolist.html"
  # status = 200









```


## Vite Config

 ```js
/** @type {import('vite').UserConfig} */
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({ 
    build:{   
        rollupOptions:{
            input:{
                main: path.resolve('./index.html'),
                todolist: path.resolve('./todolist.html'),
                notfound: path.resolve('./404.html')
            }
        }
     }
})
 ```