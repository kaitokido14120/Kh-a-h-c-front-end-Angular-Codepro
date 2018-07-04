import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.css']
})
export class OnewayBindingComponent implements OnInit {

  public name:string = "nguyễn văn b";
  public obHocVien:any = {HoTen:'Nguyễn văn a', GioiTinh:"Nữ"};
  constructor() { }

  ChangeName(obInput:any)
  {
    this.obHocVien.HoTen =  obInput.value;
  }

  ngOnInit() {
  }

}
