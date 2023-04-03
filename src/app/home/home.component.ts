import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private service:ServicesService) {
  }
  getAllJobs(){
    this.service.getAllJobs().subscribe({
      next:(data:any)=>{
        console.log(data)
      }
    })

  }
  ngOnInit(){
  this.getAllJobs()
  
  }
}
