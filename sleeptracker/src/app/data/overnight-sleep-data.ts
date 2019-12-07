import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	//private sleepStart:Date;
	//private sleepEnd:Date;
	private sleepStart:string;
	private sleepEnd:string;
	private totHours:number;
	private totMins:number;
	private percentage:number;

	/*constructor(sleepStart:Date, sleepEnd:Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}*/
	constructor(sleepStart:string, sleepEnd:string){
		super(sleepStart);
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}


	summaryString():string {
		//console.log('summaryString()');
		//var sleepStart_ms = this.sleepStart.getTime();
		//var sleepEnd_ms = this.sleepEnd.getTime();
		var sleepStartDate = new Date(this.sleepStart);
		var sleepStart_ms = sleepStartDate.getTime();
		var sleepEndDate = new Date(this.sleepEnd);
		var sleepEnd_ms = sleepEndDate.getTime();
		

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		//console.log('difference_ms: ' + difference_ms);
		    
		// Convert to hours and minutes
		//return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";

		this.totHours = Math.floor(difference_ms / (1000*60*60));
		this.totMins = Math.floor(difference_ms / (1000*60) % 60);

		return this.totHours + " hours, " + this.totMins + " minutes.";
	}

	dateString():string {
		//return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
		var sleepStartDate = new Date(this.sleepStart);
		return "Night of " + sleepStartDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

	}

	getSleepPercentage():number { //used for circle progress bar
		let hoursInMinutes = 0;
		let totalTimeInMinutes = 0;
		if(this.totHours>=8){
			this.percentage = 100;
			return this.percentage;
		} else {
			//convert hours to minutes
			hoursInMinutes  = this.totHours * 60;	

			//add the rest of the minutes to the hoursInMinutes to get total time in minutes
			totalTimeInMinutes = hoursInMinutes + this.totMins;

			//return percentage. use 480 minutes for 8 hours
			this.percentage = ( totalTimeInMinutes / 480 ) * 100;
			return this.percentage;
		}	
	}

	getCircleProgressBarColor():string {
		if(this.percentage>=75){								//6 hrs or more
			return '#00FF00'; //LimeGreen
		} else if(this.percentage >=50) {				//4 hrs or more
			return '#FFFF00'; //Yellow
		} else if(this.percentage >=25) {				//2 hrs or more
			return '#FFA500'; //Orange
		} else {																//less than 2 hrs
			return '#FF0000'; //Red
		}
	}
}
