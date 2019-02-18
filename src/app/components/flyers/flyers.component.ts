import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Flyer } from './../../models/flyer';

@Component({
  selector: 'app-flyers',
  templateUrl: './flyers.component.html',
  styleUrls: ['./flyers.component.scss']
})
export class FlyersComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Flyer>;
  displayedColumns = ['title', 'manufacture', 'year', 'comment'];
  flyers: Flyer[] = [];
  testFlyer: Flyer = {
    id: 12,
    title: 'Test machine',
    manufacture: 'Stern',
    year: 2015,
    comment: 'Cool comment'
  };
  title = 'app';

  constructor() { 
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    for(let i = 0; i<1200; i++) {
      let newFlyer = this.testFlyer;
      newFlyer.id = i;
      newFlyer.title = `Test Machine ${newFlyer.id}`;
      this.flyers.push(newFlyer);
    }
    
    this.dataSource = new MatTableDataSource<Flyer>(this.flyers);
    console.log('datasource', this.dataSource);
  }
  
}
