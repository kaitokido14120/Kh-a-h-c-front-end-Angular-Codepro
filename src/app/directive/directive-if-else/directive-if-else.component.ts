import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if-else',
  templateUrl: './directive-if-else.component.html',
  styleUrls: ['./directive-if-else.component.css']
})
export class DirectiveIfElseComponent implements OnInit {

  public status:boolean = false;
  private ThongBao:string ="";
  constructor() { }
  DangXuat(){
    this.status = false;
    this.ThongBao = "Đã đăng xuất thành công!";
  }
  DangNhap(email:string,pass:string)
  {
    if(email === "cybersoft@gmail.com" && pass === "123456")
    {
      this.status = true;

    }else
    {
      this.status = false;
      this.ThongBao = "email hoặc pass chưa chính xác !";
    }

  }

  ngOnInit() {
  }

}
