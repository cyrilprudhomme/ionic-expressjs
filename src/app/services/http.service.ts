import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<any>(environment.api + '/projects');
  }
  getSettings() {
    return this.http.get<any>(environment.api + '/settings');
  }
  sendTest() {
    this.http
      .post(environment.api + '/project', { name: 'rezrezrez' })
      .subscribe({
        next: (value) => console.log(value),
        error: (err) => console.error(err),
        complete: () => console.info('ok'),
      });
  }
}
