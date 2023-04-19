import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title!: string 
  constructor(private appService : AppService) {
    this.appService.setTitle('title')
    
  }
public ngOnInit(): void {
  this.appService.setTitle('erferf');
  this.title = this.appService.title;
}
}
