import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  topSellingBrands:any[]=[];
  leastSellingBrands:any[]=[];
  topSelling: any[] = [];
  leastSelling: any[] = [];

  constructor(
    private database: DatabaseService
  ) { }

  ngOnInit(): void {

    this.database.GetTopSellingBrands().subscribe((res:any)=>
    {
      this.topSellingBrands=res.results;
    });
    this.database.GetLeastSellingBrands().subscribe((res:any)=>
    {
      this.leastSellingBrands=res.results;
    });
    this.database.GetTopSelling().subscribe((res:any)=>
    {
      this.topSelling=res.results;
    });
    this.database.GetLeastSelling().subscribe((res:any)=>
    {
      this.leastSelling=res.results;
    });
  }

}