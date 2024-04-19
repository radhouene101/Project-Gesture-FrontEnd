import { Component,OnInit } from '@angular/core';
import {ProjectService} from "../../services/services/project.service";

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit{
  constructor(
    projetService : ProjectService
  ) {
  }

  ngOnInit(): void {
    console.log(ProjectService.GetAllProjectsPath)
  }


}
