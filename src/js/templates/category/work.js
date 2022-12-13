import { status as statusTag } from "./status/status";
import {dateFormatter} from './../../formatters/dates';
function work({ uid, todo, category, startDate, endDate, status }) {
 
  const template = `
    <section class="border-l-8 border-green-500/80 py-4 px-5 mb-1 bg-white  ">
    <header class="flex items-center justify-between">
      <h2 class="font-semibold text-[10px] text-green-600/95  bg-green-50 px-2 py-0.5 rounded-md   w-fit" >
     Work <span class="">${status}</span>
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
  
  `;
  return template;
}

export { work };
