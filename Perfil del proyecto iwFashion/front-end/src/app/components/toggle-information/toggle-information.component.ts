import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-toggle-information',
  templateUrl: './toggle-information.component.html',
  styleUrls: ['./toggle-information.component.css']
})
export class ToggleInformationComponent implements OnInit {

  public DialogData:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data) {

    this.DialogData=data;
    console.log(this.DialogData);
  }

  ngOnInit(): void {
  }

}
