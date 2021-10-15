import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
 import { Students } from './data';
import {Observable} from "rxjs";
// import { Data1 } from '../assets/datajson';
// import {Http, HTTP_PROVIDERS} from '@angular/http';
// import {map} from 'rxjs/operators';
//
// @Component({
//   selector: 'http-app',
//   viewProviders: [HTTP_PROVIDERS],
//   templateUrl: 'people.html'
// })

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) {

  }
  configUrl = './assets/config.json';
  // getHeroes(): Data[] {
  //   return Data1;
  // }
  getConfig() {
return this.http.get<any>('https://api.hatchways.io/assessment/students').pipe(
      map((res) => res));
  }
  filterConfig(firstName: string) {
    return this.http.get<any>('https://api.hatchways.io/assessment/students').pipe(map(students => students.students[0].firstName));

  }



}
