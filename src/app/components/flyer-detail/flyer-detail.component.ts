
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Flyer } from './../../models/flyer';

@Component({
  selector: 'app-flyer-detail',
  templateUrl: './flyer-detail.component.html',
  styleUrls: ['./flyer-detail.component.scss']
})
export class FlyerDetailComponent implements OnInit {
  testFlyer: Flyer = {
    id: 12,
    title: 'Test machine',
    manufacture: 'Stern',
    year: 2015,
    comment: 'Cool comment'
  };

  constructor() { }

  ngOnInit() {
  }

}
