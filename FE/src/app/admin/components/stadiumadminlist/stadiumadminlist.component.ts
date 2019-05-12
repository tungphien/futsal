import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stadiumadminlist',
  templateUrl: './stadiumadminlist.component.html',
  styleUrls: ['./stadiumadminlist.component.css']
})
export class StadiumadminlistComponent implements OnInit {

  stadiums: object;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getStadiums().subscribe(data => {
      this.stadiums = data
    }
    );
  }

  deleteStadium(id:string){
    this.dataService.deleteStadium({'id':id})
  }
}
