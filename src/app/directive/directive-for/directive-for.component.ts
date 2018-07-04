import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  templateUrl: './directive-for.component.html',
  styleUrls: ['./directive-for.component.css']
})
export class DirectiveForComponent implements OnInit {

  public DanhSachSinhVien:Array<any> = 
  [
    {MaSV: "01",HoTen:"Nguyễn văn A", Tuoi:15},
    {MaSV: "02",HoTen:"Nguyễn văn B", Tuoi:15},
    {MaSV: "03",HoTen:"Nguyễn văn C", Tuoi:15},
    {MaSV: "04",HoTen:"Nguyễn văn D", Tuoi:15},
    {MaSV: "05",HoTen:"Nguyễn văn E", Tuoi:15},
  ];
  constructor() { }
  ThemSinhVien(masv,hoten,tuoi)
  {
    this.DanhSachSinhVien.push({MaSV: masv,HoTen:hoten, Tuoi:tuoi});
  }
  ngOnInit() {
  }

}
