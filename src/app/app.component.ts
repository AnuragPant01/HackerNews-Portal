import { Component } from '@angular/core';
import {HackerNewsService} from '../app/hacker-news.service';
import{Item} from '../app/hacker-news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';
  items: Array<Item>;
  count=0;
  
  constructor(private newApi:HackerNewsService,){        
  }

  ngOnInit() {
    this.fetchData();
      
}

fetchData(){
  this.newApi.getData().subscribe(
    (data: Array<Item>) => {
      console.log(data);
      this.items = data;
    },
    err => {
      console.log(err);
    }
  );
}


bookmark(){
  this.count=this.count+1;
}

}