import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurentsList: any[], filterString:String, propName:any): any[] {
    const result:any=[]
    if(!restaurentsList || filterString=='' || propName==''){
      return restaurentsList
    }

    restaurentsList.forEach((restaurent:any)=>{
      if(restaurent[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(restaurent)
      }
    })
    return result
  }

}
