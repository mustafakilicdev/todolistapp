/** @type {import('vite').UserConfig} */
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({ 
    build:{   
        rollupOptions:{
            input:{
                main: path.resolve('./index.html'),
                // todolist: path.resolve('./todolist.html'),
                // notfound: path.resolve('./404.html')
            }
        }
     }
})