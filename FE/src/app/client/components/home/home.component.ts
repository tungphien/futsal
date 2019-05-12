import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stadiums: object;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.addStadium(null);
    this.dataService.getStadiums().subscribe(data => {
      this.stadiums = data
      console.log(this.stadiums);
    }
    );
  }
}
