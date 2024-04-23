import { Component,OnInit } from '@angular/core';
import {ProjectsService} from "../../services/services/projects.service";
import {ProjectsDto} from "../../services/models/projects-dto";
import {BreakpointObserver} from "@angular/cdk/layout";
import {UserService} from "../../services/services/user.service";

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit{
  constructor(

    private breakpointObserver: BreakpointObserver,
    private user : UserService,
    private projetService : ProjectsService) { }

  projects:Array<ProjectsDto> = [];

  ngOnInit(): void {
    this.projetService.getAllProjects()
      .subscribe({
        next :(data)=>{
          this.projects=data;
          console.log(data)
        }
      })
    const test = this.user.findAll()
      .subscribe({
        next :(data)=>{
          console.log(data.toString())
        }
      })
  }


}
