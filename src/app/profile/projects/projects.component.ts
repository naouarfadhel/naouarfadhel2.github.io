import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  display:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
imgAIESEC(){
  this.display=true
}
imgAIESECOff(){
  this.display=false
}
}
