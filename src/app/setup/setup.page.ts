import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  items: any[]=[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getSettings().subscribe({
      next:value => this.items=value,
      error:err => console.error(err),
      complete:() => console.info("ok")});
  }




}
