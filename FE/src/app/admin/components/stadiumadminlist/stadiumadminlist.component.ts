import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stadiumadminlist',
  templateUrl: './stadiumadminlist.component.html',
  styleUrls: ['./stadiumadminlist.component.css']
})
export class StadiumadminlistComponent implements OnInit {

  stadiums: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getStadiums().subscribe(data => {
      this.stadiums = data
    }
    );
  }

  deleteStadium(stadium: object, index: any) {   
    console.log(stadium)
    this.dataService.deleteStadium({'id':stadium['_id']['$oid']})
    this.stadiums.splice(index, 1)
  }
}
