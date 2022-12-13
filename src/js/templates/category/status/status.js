function status (type) {
    if(type==="Completed"){
        return    `<p
        class="bg-green-300 px-2 py-0.5 rounded-md text-[10px] font-semibold text-green-500 shadow-sm shadow-green-500/20 w-fit"
      >
       Completed
      </p> `
    }

  

    if(type==="Not Started"){
        return    `<p
        class="bg-sky-300 px-2 py-0.5 rounded-md text-[8px] font-semibold text-sky-600 shadow-sm shadow-sky-500/20 w-fit"
      >
       Not Started
      </p> `
    }

    if(type==="In Progress"){
        return    `<p
        class="bg-purple-300 px-2 py-0.5 rounded-md text-[10px] font-semibold text-purple-600 shadow-sm shadow-purple-500/20 w-fit"
      >
        In Progress
      </p> `
    }

    if(type==="Cancelled"){
        return    `<p
        class="bg-pink-300 px-2 py-0.5 rounded-md text-[10px] font-semibold text-pink-600 shadow-sm shadow-pink-500/20 w-fit"
      
      >
       Cancelled
      </p> `
    }
     
}

export {status};