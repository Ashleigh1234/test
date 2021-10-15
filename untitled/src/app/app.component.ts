import {Component, OnInit} from '@angular/core';
import { AppService } from './app.service';
import { Students } from './data';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public show:boolean = false;
  public buttonName:any = 'Show';
  heroes: any[]=[];
  firstName: string = '';
  searchName: string = '';
  colapse: boolean[] = [false];

  constructor(private DataResponse: AppService ) {

   }

  //
  // title = 'untitled';

  showConfig() {
    this.DataResponse.getConfig().subscribe((results) => {
         this.heroes = results.students;


         //this.heroes1 = results.students.grades;

        // var result = JSON.stringify(this.heroes[0].grades.map(function (x:any) {
        //   return parseInt(x, 10);
        // }));

        // var total = 0;
        // for(var i = 0; i < this.bleh.length; i++) {
        //
        //   total += this.bleh[i];
        // }
        // var avg = total / this.bleh.length;

       // var average = Object
       //    .values(this.heroes)
       //    .reduce((avg, { result }, _, { length }) => avg + result / length, 0);

       // console.log('ha',avg);

        // console.log('JSON Response = ', JSON.stringify(this.heroes[0].pic));
      })

  //   this.myService.getMovies()
  //     .subscribe(res => this.movies = res);
  // }

   }
//   filterConfig() {
//     this.DataResponse.filterConfig(this.firstName).subscribe((results) => {
//       this.heroes = results;
// console.log(JSON.stringify(this.heroes))
//     })
//
//
//
//   }

  // calHandle(i: number) {
  //   var sum = 0;
  //   var keys = Object.keys(this.heroes1[i]);
  //   keys.forEach(key => {
  //     if (key != "grades") {
  //       sum += Number(this.heroes1[i][key]);
  //     }
  //   });
  //   this.heroes1[i].average = sum / (keys.length - 1);
  // }
  // toggle() {
  //   this.show = !this.show;
  //
  //   // CHANGE THE NAME OF THE BUTTON.
  //   if(this.show)
  //     this.buttonName = "Hide";
  //   else
  //     this.buttonName = "Show";
  // }
  toggle(id:any) {

    if (!this.colapse[id]) {
      this.colapse[id] = true;
    }
    else {
      this.colapse[id] = !this.colapse[id];
    }
  }

  ngOnInit() {
    this.showConfig();
    //  this.filterConfig();

    //this.calHandle(0);
  }
}
