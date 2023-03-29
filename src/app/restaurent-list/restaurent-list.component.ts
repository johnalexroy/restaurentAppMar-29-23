import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restaurent-list',
  templateUrl: './restaurent-list.component.html',
  styleUrls: ['./restaurent-list.component.css']
})
export class RestaurentListComponent implements OnInit {

restaurentsList:any = []

// to hold searchterm
searchTerm=""
// dependency injection
  constructor(private apiService:ApiService){}

ngOnInit(): void {
  this.apiService.getAllRestaurentList()
  .subscribe((result)=>{
    this.restaurentsList = result
    console.log(this.restaurentsList);
    
  })

  // to get search term from api service
  this.apiService.search.subscribe((data)=>{
    console.log(data);
    this.searchTerm = data
    
  })
}

}
