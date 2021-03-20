import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fill-table',
  templateUrl: './fill-table.component.html',
  styleUrls: ['./fill-table.component.scss'],
})
export class FillTableComponent implements OnInit {
  valueTable: any[] = [];
  categories: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData().subscribe((res) => {
      this.valueTable = res;
    });
  }

  getData(): Observable<any> {
    return this.http.get<any>(`https://api.publicapis.org/categories`);
  }

  fillter() {
    this.getData().subscribe((res) => {
      if (this.categories != '') {
        let filtered: any[] = [];
        for (let i = 0; i < res.length; i++) {
          let value = res[i];
          if (value.toLowerCase().indexOf(this.categories.toLowerCase()) == 0) {
            filtered.push(value);
          }
        }
        this.valueTable = filtered;
      } else {
        this.valueTable = res;
      }
    });
  }
}
