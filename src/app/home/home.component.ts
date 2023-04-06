import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  navbarItems:any=[]
  heroSection:any=[]
  whoWeAre:any=[]
  section1:any=[]
  constructor(private service:ServicesService) {
    this.getNavbar()
    this.getHeroSection()
    this.getWhoWeAre()
    this.getSection1()
  }
  
  getNavbar(){
    this.service.getComponent("navbar").subscribe({
      next:(data:any)=>{
        this.navbarItems=data.lComponentContents[0].nodes[0].nodes
        console.log(this.navbarItems)
      }
    })

  }
  getHeroSection(){
    this.service.getComponent("hero-section").subscribe({
      next:(data:any)=>{
        this.heroSection=data.lComponentContents[0].nodes
        console.log(this.heroSection)
      }
    })

  }
  getWhoWeAre(){
    this.service.getComponent("who-we-are").subscribe({
      next:(data:any)=>{
        this.whoWeAre=data.lComponentContents[0].nodes
        console.log(this.whoWeAre)
      }
    })

  }
  getSection1(){
    this.service.getComponent("section1").subscribe({
      next:(data:any)=>{
        this.section1=data.lComponentContents[0].nodes
        console.log(this.section1)
      }
    })

  }
  ngOnInit(){

  
  }
}
