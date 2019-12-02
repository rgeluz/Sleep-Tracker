import { Component, OnInit } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { OvernightSleepData  } from '../../data/overnight-sleep-data';

@Component({
  selector: 'app-overnightsleep',
  templateUrl: './overnightsleep.page.html',
  styleUrls: ['./overnightsleep.page.scss'],
})
export class OvernightsleepPage implements OnInit {
  startDateTime:string=new Date().toISOString();
  endDateTime:string=new Date().toISOString();

  constructor(private sleepService:SleepService) { }

  ngOnInit() {
  }

  addEntryClicked() {
    //this.startDateTime = new Date().toISOString();
    //this.endDateTime = new Date().toISOString();
    console.log('overnightsleep.page addEntryClicked()');
    console.log('startDate: ' + this.startDateTime);
    console.log('endDate: ' + this.endDateTime);
    let overnightSleepData: OvernightSleepData = new OvernightSleepData(this.startDateTime, this.endDateTime);
    /*
    if(overnightSleepData) {
      console.log('sleepData is true');
      var sleepStartDate  = new Date(this.startDateTime);
      var sleepEndDate = new Date(this.endDateTime);
      console.log('difference: ' + ( sleepEndDate.getTime()-sleepStartDate.getTime() ) + '');
      console.log('summaryString: ' + overnightSleepData.summaryString() );
      console.log('dateString: ' + overnightSleepData.dateString() );
      console.log('sleepData.id' + overnightSleepData.id);
    } */

    
    this.sleepService.logOvernightData(overnightSleepData);
    
    //Summary
    /*this.sleepService.summaryOfAllOvernightData();
    this.sleepService.summaryOfAllSleepinessData();
    this.sleepService.summaryOfAllSleepData();*/
    
    
  }

}
