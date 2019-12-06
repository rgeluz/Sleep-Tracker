import { Component, OnInit } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.page.html',
  styleUrls: ['./viewdata.page.scss'],
})
export class ViewdataPage implements OnInit {
  testArray:string[] = ['one','two','three','four'];
  overnightSleepDataArray: OvernightSleepData[];
  sleepinessDataArray: StanfordSleepinessData[];

  constructor(private sleepService:SleepService) { }

  ngOnInit() {
    this.overnightSleepDataArray = SleepService.AllOvernightData;
    this.sleepinessDataArray = SleepService.AllSleepinessData;
  }

}
