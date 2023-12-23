import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  settings!: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getSettings().subscribe({
      next:value => this.settings=value[0],
      error:err => console.error(err),
      complete:() => console.info("ok")});
  }




}
