import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stadiums: Object;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getStadiums().subscribe(data => {
      this.stadiums = data
      console.log(this.stadiums);
    }
  );
  }

}
