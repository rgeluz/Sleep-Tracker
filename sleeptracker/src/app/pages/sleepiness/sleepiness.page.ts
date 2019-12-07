import { Component, OnInit } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  dateTime:string = new Date().toISOString();
  degree:number;
  scaleValues: string[];
  sleepinessDataArray: StanfordSleepinessData[];
  recentSleepinessData: StanfordSleepinessData;

  constructor(private sleepService:SleepService, public toastController: ToastController) { }

  ngOnInit() {
    //this.scaleValues = StanfordSleepinessData.ScaleValues; //not using 
    this.sleepinessDataArray = SleepService.AllSleepinessData;
    this.recentSleepinessData = this.sleepinessDataArray[this.sleepinessDataArray.length-1];
  }

  //See documentation for 'ion-toast'
  async presentToast(duration_:number) {
    const toast = await this.toastController.create({
      message: 'Your entry has been saved',
      position: 'top',
      color: 'success',
      duration: duration_ //2000
    });
    toast.present();
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
    this.presentToast(2000);
    //retrieve recent element
    this.recentSleepinessData = this.sleepinessDataArray[this.sleepinessDataArray.length-1];

    //Summary
    /*this.sleepService.summaryOfAllOvernightData();
    this.sleepService.summaryOfAllSleepinessData();
    this.sleepService.summaryOfAllSleepData();*/
    this.sleepService.getAllOvernightDataFromStorage();
    this.sleepService.getAllSleepinessDataFromStorage();
  }
}
