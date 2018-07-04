import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-binding',
  templateUrl: './bai-tap-binding.component.html',
  styleUrls: ['./bai-tap-binding.component.css']
})
export class BaiTapBindingComponent implements OnInit {

  public Email:string = "twowaybinding";
  public FullName:string = "eventbinding";

  constructor() { }

  ChangeFullName(fullName:string)
  {
    this.FullName = fullName;

  }
  ngOnInit() {
  }

}
