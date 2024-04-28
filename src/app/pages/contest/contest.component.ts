import { Component,OnInit } from '@angular/core';
import {ProjectsService} from "../../services/services/projects.service";
import {ProjectsDto} from "../../services/models/projects-dto";
import {BreakpointObserver} from "@angular/cdk/layout";
import {UserService} from "../../services/services/user.service";
import {ContestBalDeProjetService} from "../../services/services/contest-bal-de-projet.service";
import {getAllContests} from "../../services/fn/contest-bal-de-projet/get-all-contests";
import {ContestDto} from "../../services/models/contest-dto";

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit{
  constructor(

    private breakpointObserver: BreakpointObserver,
    private user : UserService,
    private projetService : ProjectsService,
    private contestService :ContestBalDeProjetService
  ) { }

  contestList:Array<ContestDto> = [];
  test :ContestDto={};
  getContestList(){
    this.contestService.getAllContests().subscribe(
    (data)=>{
      this.contestList=data
      console.log(JSON.stringify(this.contestList));
    }
    )
  }

  ngOnInit(): void {
    this.getContestList()
  }


}
