import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  recipeName=""
  type=""
  description=""
  postedDate=""

  status:boolean=false

  readValues=()=>{
    let data={
      "recipeName":this.recipeName,
      "type":this.type,
      "description":this.description,
      "postedDate":this.postedDate
    }

    console.log(data)

    this.myapi.addRecipe(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Successfully added")
      }
    )

    this.recipeName=""
    this.type=""
    this.description=""
    this.postedDate=""

    this.status=true

    
  }

  ngOnInit(): void {
  }

}
