import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent implements OnInit {

  id:any;
  neighborhood:any
  photograph:any
  Monday:any
  Tuesday:any
  Wednesday:any
  Thursday:any
  Friday:any
  Saturday:any
  Sunday:any
  rNAme:any
  address:any
  cusine_type:any
  rvname:any
  Date:any
  Rating:any
  Comments:any
  lat:any
  lng:any
  constructor(private api:ApiService,private router:Router) {}

  ngOnInit(): void {
    
  }

  addProduct(){

    let newRestaurent = {
      id:this.id,
      name:this.rNAme,
      neighborhood:this.neighborhood,
      photograph:this.photograph,
      address:this.address,
      latlng:{
        lat:this.lat,
        lng:this.lng
      },
      cuisine_type:this.cusine_type,
      operating_hours:{
        Monday:this.Monday,
        Tuesday:this.Tuesday,
        Wednesday:this.Wednesday,
        Thursday:this.Thursday,
        Friday:this.Friday,
        Saturday:this.Saturday,
        Sunday:this.Sunday
      },
      reviews:[
        {
          name:this.rvname,
          date:this.Date,
          rating:this.Rating,
          comments:this.Comments
        }
      ]
    }
    this.api.addRestaurent(newRestaurent)
    .subscribe(()=>{
    alert('Restaurent details Successfully added!!!!')
    this.router.navigateByUrl('')
    })
    
  }

}
