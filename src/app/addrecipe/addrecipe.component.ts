import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor() { }

  recipeName=""
  type=""
  description=""
  postedDate=""

  readValues=()=>{
    let data={
      "recipeName":this.recipeName,
      "type":this.type,
      "description":this.description,
      "postedDate":this.postedDate
    }

    console.log(data)
  }

  ngOnInit(): void {
  }

}
