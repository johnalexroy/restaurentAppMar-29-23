import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-restaurent',
  templateUrl: './delete-restaurent.component.html',
  styleUrls: ['./delete-restaurent.component.css']
})
export class DeleteRestaurentComponent implements OnInit {
  restId:any

constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router) {}

ngOnInit():void{
this.activatedRoute.params.subscribe((result)=>{
  console.log(result['id']);
  this.restId = result ['id']
  
})
  this.api.DeleteRestaurentComponent(this.restId)
.subscribe(()=>{
  alert('Requested restaurent has been removed')
  this.router.navigateByUrl('')
  
})
}

}

