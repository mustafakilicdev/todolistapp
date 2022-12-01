# Juggler To Do List App

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