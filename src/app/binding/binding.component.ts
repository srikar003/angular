import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }
  myTaste:string='sour';
  taste:string;
  reqtaste:string;

  display(){
    alert(this.myTaste);
  }

  student={
    name:'srikar',
    roll:'5J0'
  }

  ngOnInit() {
  }

}
