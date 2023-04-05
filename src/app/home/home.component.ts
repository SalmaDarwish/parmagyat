import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  navbarItems:any=[]
  constructor(private service:ServicesService) {
    this.getHome()
    this.getNavbar()
  }
  getHome(){
    this.service.getHome().subscribe({
      next:(data:any)=>{
        this.navbarItems=data.lComponentContents[0].nodes[0].nodes
        console.log(this.navbarItems)
      }
    })

  }
  getNavbar(){
    this.service.getComponent("navbar").subscribe({
      next:(data:any)=>{
        this.navbarItems=data.lComponentContents[0].nodes[0].nodes
        console.log(this.navbarItems[1].nodes)
      }
    })

  }
  ngOnInit(){

  
  }
}
