import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

  constructor() {
  	if(SleepService.LoadDefaultData) {
      this.addDefaultData();
  		SleepService.LoadDefaultData = false;
  	}
  }

  private addDefaultData() {
    /*console.log('addDefaultData()');
    this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00'), new Date('November 17, 2019 09:25:00')));
    this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00')));
    this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00'), new Date('November 18, 2019 08:03:00')));*/

    console.log('addDefaultData()');
    this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00').toISOString(), new Date('November 17, 2019 09:25:00').toISOString()));
    this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00').toISOString()));
    this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00').toISOString(), new Date('November 18, 2019 08:03:00').toISOString()));
  }

  public logOvernightData(sleepData:OvernightSleepData) {
    console.log('logOvernightData()');
  	SleepService.AllSleepData.push(sleepData);
  	SleepService.AllOvernightData.push(sleepData);
  }

  public logSleepinessData(sleepData:StanfordSleepinessData) {
    console.log('logSleepinessData()');
  	SleepService.AllSleepData.push(sleepData);
  	SleepService.AllSleepinessData.push(sleepData);
  }


  public summaryOfAllSleepData() {
    console.log('summaryOfAllSleepData(): ');
    SleepService.AllSleepData.forEach( (element)=> {
      console.log(element.id);
      console.log(element.loggedAt);
      console.log(element.summaryString());
    });
  }

  public summaryOfAllOvernightData() {
    console.log('summaryOfAllOvernightData(): ');
    SleepService.AllOvernightData.forEach( (element)=> {
      console.log(element.id);
      console.log(element.loggedAt);
      console.log(element.summaryString());
    });
  }

  public summaryOfAllSleepinessData() {
    console.log('summaryOfAllSleepinessData(): ');
    SleepService.AllSleepinessData.forEach( (element) => {
      console.log(element.id);
      console.log(element.loggedAt);
      console.log(element.summaryString());
    });
  }

}
