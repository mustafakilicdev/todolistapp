import { format} from 'date-fns'
 


const uiDate = new Date();

 console.log(format(new Date(uiDate),'MMM/dd/yyyy'))

 function dateFormatter (date) {
     
     return format(new Date(date),yyyy/M/dd)
 }
 
 export {dateFormatter};