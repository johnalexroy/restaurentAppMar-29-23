import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent implements OnInit {
restId:any;
restDetails:any={}
  constructor(private activatedRoute:ActivatedRoute,private apiServie:ApiService,private router:Router){ }


  ngOnInit():void {
    // 1.to get restaurent id to be updated
    this.activatedRoute.params.subscribe((result:any)=>{
      this.restId = result ['id']
      
    })
    // 2.fetch details of restaurent id
  this.apiServie.viewRestaurent(this.restId).subscribe((result:any)=>{
    this.restDetails = result
    console.log(this.restDetails);
    
  })
  }

  // updateRestaurent
  updateRestaurent(form:any){
    
    let updatedRestDetails ={

      id:form.value.id,
      name:form.value.rNAme,
      neighborhood:form.value.neighborhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng:{
        lat:form.value.lat,
        lng:form.value.lng
      },
      cuisine_type:form.value.cusine_type,
      operating_hours:{
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
      },
      reviews:[
        {
          name:form.value.rvname,
          date:form.value.Date,
          rating:form.value.Rating,
          comments:form.value.Comments
        }
      ]
    }
    this.apiServie.updateRestaurent(this.restId,updatedRestDetails)
    .subscribe(()=>{
      alert('Restaurent details Successfully added!!!!')
      this.router.navigateByUrl('')

    })

  }

}
