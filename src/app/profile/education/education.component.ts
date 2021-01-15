import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

    displayURL;
  constructor() {
   }
  display:boolean=false
  displayBac:boolean=false
  ngOnInit(): void {
  }
  confirm1(){
    this.display=true
  }
  confirm2(){
    this.display=false
  }
  confirm3(){
    this.displayBac=true
  }
  confirm4(){
    this.displayBac=false
  }
  
}
