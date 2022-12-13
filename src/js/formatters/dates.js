import {format} from 'date-fns'
 


const uiDate = new Date();

 

 function dateFormatter (date) {
     
     return format(new Date(uiDate),'MM/dd/yyyy')
 }
 
 export {dateFormatter};