import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  templateUrl: './directive-if.component.html',
  styleUrls: ['./directive-if.component.css']
})
export class DirectiveIfComponent implements OnInit {

  private status:boolean = true;

  constructor() { }

  Hidden()
  {
    this.status = false;

  }
  Show(){
    this.status = true;

  }

  ngOnInit() {
  }

}
