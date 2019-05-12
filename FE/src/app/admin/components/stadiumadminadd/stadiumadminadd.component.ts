import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadiumadminadd',
  templateUrl: './stadiumadminadd.component.html',
  styleUrls: ['./stadiumadminadd.component.css']
})
export class StadiumadminaddComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private dataService: DataService,private router: Router) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      stadiumName: ['', Validators.required],
      stadiumOwner: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;    
    console.log(this.messageForm.value)
    this.dataService.addStadium(this.messageForm.value)
    // this.router.navigate(['/admin/stadium']);
  }

}
