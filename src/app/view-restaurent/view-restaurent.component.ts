import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-restaurent',
  templateUrl: './view-restaurent.component.html',
  styleUrls: ['./view-restaurent.component.css']
})
export class ViewRestaurentComponent implements OnInit{

restId:number = 0

restDetails:any ={}

  constructor(private activateRoute:ActivatedRoute , private apiService:ApiService){}

  ngOnInit(): void {
    // to get parameter from url
    this.activateRoute.params.subscribe((result)=>{
      this.restId = result['id']
      console.log(this.restId);
      
    })

    // // call api to get single restaurent detail
    this.apiService.viewRestaurent(this.restId)
    .subscribe((result)=>{
      this.restDetails = result
      console.log(this.restDetails);
      
    })
  }
}
