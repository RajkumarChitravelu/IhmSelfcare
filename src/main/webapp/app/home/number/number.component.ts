import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
})
export class NumberComponent implements OnInit {
  number = '';

  constructor() {}

  ngOnInit(): void {}

  OnKey(event: any) {
    this.number = event.target.value;
  }
  generateRow() {
    //console.log("ok");
    //for (i=0,i<number,i++){}
  }
}
