import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


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
  section2:any=[]
  boxes:any=[]
  section3:any=[]
  section4:any=[]
  clients:any=[]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private service:ServicesService) {
    this.getNavbar()
    this.getHeroSection()
    this.getWhoWeAre()
    this.getSection1()
    this.getSection2()
    this.getSection3()
    this.getSection4()
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
  getSection2(){

    this.service.getComponent("section2").subscribe({
      next:(data:any)=>{
        this.section2=data.lComponentContents[0].nodes
        this.boxes=this.section2[3].nodes[0].nodes
        console.log(this.section2)
        console.log(this.boxes)
      }
    })

  }
  getSection3(){

    this.service.getComponent("section3").subscribe({
      next:(data:any)=>{
        this.section3=data.lComponentContents[0].nodes
        console.log(this.section3)
      }
    })

  }
  getSection4(){

    this.service.getComponent("section4").subscribe({
      next:(data:any)=>{
        this.section4=data.lComponentContents[0].nodes
        this.clients=this.section4[1].nodes[0].nodes
        console.log(this.clients)
      }
    })

  }
  ngOnInit(){

  
  }
}
