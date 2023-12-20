import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  items: any[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(environment.api+'/projects').subscribe({
      next:value => this.items=value,
      error:err => console.error(err),
      complete:() => console.info("ok")});
  }

  sendTest() {
    this.http.post(environment.api+'/projects', {name:"rezrezrez"}).subscribe({
      next:value => console.log(value),
      error:err => console.error(err),
      complete:() => console.info("ok")});
  }

}
