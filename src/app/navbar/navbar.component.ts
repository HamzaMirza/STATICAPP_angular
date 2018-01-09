import { Component, OnInit } from '@angular/core';
export let pages:Object[]=[
                    {text:'Home',path:'/home'},
                    {text:'Products',path:'/product'},
                    {text:'Rent-Own',path:'/rentown'},
                    {text:'Datasheets',path:'/datasheets'},
                    {text:'Support',path:'/support'},
                    {text:'News',path:'/news'},
                    {text:'Partners',path:'/partners'},
                    {text:'About',path:'/about'},
                    {text:'Contact',path:'/contact'}
                ];
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit 
{
  searchInput:string="";
  showSearch:boolean=false;
  showLogin:boolean=false;
  isActive=0;
   links=pages;
  toggleActive(i:number):void
  {
    this.isActive=i;
  }
  toggleTopSearch():void
  {
    this.showSearch=!this.showSearch;
    this.showLogin=false;
  }
  toggleTopLogin():void
  {
    this.showLogin=!this.showLogin;
    this.showSearch=false;
  }
  constructor() { }
  ngOnInit() {}

}
