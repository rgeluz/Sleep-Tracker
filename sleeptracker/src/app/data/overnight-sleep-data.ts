import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	//private sleepStart:Date;
	//private sleepEnd:Date;
	private sleepStart:string;
	private sleepEnd:string;

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
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
	}

	dateString():string {
		//return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
		var sleepStartDate = new Date(this.sleepStart);
		return "Night of " + sleepStartDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

	}
}
