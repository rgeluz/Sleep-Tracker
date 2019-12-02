import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.page.html',
  styleUrls: ['./viewdata.page.scss'],
})
export class ViewdataPage implements OnInit {
  testArray:string[] = ['one','two','three','four'];

  constructor() { }

  ngOnInit() {
  }

}
