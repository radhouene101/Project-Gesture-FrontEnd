import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {TestService} from "../../services/testService/test.service";
import {UserService} from "../../services/services/user.service";
import {ProjectService} from "../../services/services/project.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Projects requests', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private testService : TestService,
    private user : UserService,
    private projetService : ProjectService

  ) {}

  ngOnInit(): void {
    console.log(this.projetService.getAllProjects$Response().subscribe(
      {
        next: (data) => {
          console.log('project list is ',data);
        }
      }
    ))
  this.testService.finAllUsers()
    .subscribe(
      {
        next: (data) => {
          console.log('Transactions list is ',data);
        }
      }
  )
    this.user.findAll()
      .subscribe({
        next :(data)=>{
          console.log(data)
        }
        })
  }



}
