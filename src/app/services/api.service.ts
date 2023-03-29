import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // [x: string]: any;

  search = new BehaviorSubject("")

  constructor(private api:HttpClient) { }

  // to get all restaurent list function
  getAllRestaurentList()
  {
    return this.api.get('http://localhost:3000/restaurants')
  }

  // to get single restaurent details
  viewRestaurent(restId:number){
    // using rest id call api :http://localhost:3000/restaurants/restID
    // Http Request - get Method
    return this.api.get('http://localhost:3000/restaurants/'+restId)
  }

// 3. To add new Restaurent
addRestaurent(newRestaurent:any){
 return this.api.post('http://localhost:3000/restaurants/',newRestaurent)
}

// 4.to update particular restaurent
updateRestaurent(restId:any,updatedRestBody:any){
  return this.api.put('http://localhost:3000/restaurants/'+restId,updatedRestBody)
}

// to delete particular restaurent 
DeleteRestaurentComponent(restId:any){
  return this.api.delete('http://localhost:3000/restaurants/'+restId)
}
}

