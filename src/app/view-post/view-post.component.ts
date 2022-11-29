import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {
  constructor(private api:ServiceService){
    api.fetchPost().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  data:any=[]

}
