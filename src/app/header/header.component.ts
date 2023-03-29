import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// thazhe ulla search il aanu namal search chaiyunnath store akunnath
  search = "Restaurent to be searched"
  constructor(private api:ApiService){}

  ngOnInit(): void {
  }

  searchTerm(event:any){
    console.log(event);
    let searchkey = event.target.value
    this.api.search.next(searchkey)
  } 
}
