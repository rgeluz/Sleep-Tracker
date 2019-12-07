import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
//import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
//import { Observable} from 'rxjs';
//import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

/* export interface Sleep_Data {
  id:string;
  loggedAt:string;
  loggedValue:number; //used for sleepinees data
  sleepStart:string;  //used for overnight sleep data
  sleepEnd:string;  //used for overnight sleep data
} */


@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
  public static AllSleepinessData:StanfordSleepinessData[] = [];
  
  //private sleep_dataCollection: AngularFirestoreCollection<Sleep_Data>;
  //private sleep_data: Observable<Sleep_Data[]>;

  constructor(/*db: AngularFirestore*/     
                private AllSleepDataStorage: Storage,
                private AllOvernightDataStorage: Storage,
                private AllSleepinessDataStorage: Storage
              ) {



    //this.sleep_dataCollection = db.collection<Sleep_Data>('sleep_data'); //"sleep_data" name of collection inside firebase

    //From "How to Create a Simple Ionic 4 Firebase App with AngularFire" https://www.youtube.com/watch?v=H20l9ofyR54
    //this.sleep_data = this.sleep_dataCollection.snapshotChanges();

    //append below to snapshotChange() above. for example snapshotChanges().pipe ( ...)
    // if you need to update or delete an object. We may not 
    //need to do this.
    /*.pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );*/

  	if(SleepService.LoadDefaultData) {
      this.addDefaultData();
  		SleepService.LoadDefaultData = false;
  	}
  }

  //Firebase methods:  //don't need to update or remove any records
  /*getAllSleepDataFromDB(){    //retrive all records from collection
    return this.sleep_dataCollection;
  }
  addSleepDataToDB(sleepData : Sleep_Data){ //add record to collection
    return this.sleep_dataCollection.add(sleepData);
  }*/


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
    
    this.AllOvernightDataStorage.set(sleepData.id, sleepData);



  }

  public logSleepinessData(sleepData:StanfordSleepinessData) {
    console.log('logSleepinessData()');
  	SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);
    
    this.AllSleepinessDataStorage.set(sleepData.id, sleepData);
  }


  /*public summaryOfAllSleepData() {
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
  }*/

  public getAllOvernightDataFromStorage() {
    console.log('getAllOvernightDataFromStorage(): ');
    SleepService.AllOvernightData.forEach( (element) => {
      this.AllSleepinessDataStorage.get(element.id).then( (val) => {
        console.log(val);
      });
    });
  }
  
  public getAllSleepinessDataFromStorage(){
    console.log('getAllSleepinessDataFromStorage(): ');
    SleepService.AllSleepinessData.forEach( (element) => {
      this.AllOvernightDataStorage.get(element.id).then( (val) => {
        console.log(val);
      });
    });
  }
}
