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
  showSleepDataCards: boolean;
  showSleepinessDataCards: boolean;

  constructor(private sleepService:SleepService) { }

  ngOnInit() {
    this.overnightSleepDataArray = SleepService.AllOvernightData;
    this.sleepinessDataArray = SleepService.AllSleepinessData;
    this.showSleepDataCards = true;
    this.showSleepinessDataCards = false;
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    console.log("event.detail.value: " + ev.detail.value);
    if(ev.detail.value=="sleepData") {
      console.log("show sleep data!");
      this.showSleepDataCards = true; 
      this.showSleepinessDataCards = false;
    } else if (ev.detail.value=="sleepinessData"){
      console.log("show sleepiness data!");
      this.showSleepDataCards = false;
      this.showSleepinessDataCards = true;
    }
  }

}
