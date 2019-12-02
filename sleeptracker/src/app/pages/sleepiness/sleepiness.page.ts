import { Component, OnInit } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  dateTime:string = new Date().toISOString();
  degree:number;

  constructor(private sleepService:SleepService) { }

  ngOnInit() {
  }

  addEntryClicked() {
    console.log('sleepiness.page addEntryClicked()');

    let stanfordSleepinessData:StanfordSleepinessData = new StanfordSleepinessData(this.degree, this.dateTime);
    /*if(stanfordSleepinessData){
      console.log('stanfordSleepinessData.id: '+ stanfordSleepinessData.id);
      console.log('stanfordSleepinessData.summaryString(): ' + stanfordSleepinessData.summaryString());
      console.log('stanfordSleepinessData.dateString(): '+ stanfordSleepinessData.dateString());
    }*/

    this.sleepService.logSleepinessData(stanfordSleepinessData); 

    //Summary
    /*this.sleepService.summaryOfAllOvernightData();
    this.sleepService.summaryOfAllSleepinessData();
    this.sleepService.summaryOfAllSleepData();*/
    
  }
}
