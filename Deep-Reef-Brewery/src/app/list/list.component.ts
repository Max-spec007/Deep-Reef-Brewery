import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: any;
  // brews: Object[] = [];

  constructor(private _http: HttpService) { }
    // this.brews = [];

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data
      // this.brews = [];
      console.log(this.brews);
    });
  }

}
