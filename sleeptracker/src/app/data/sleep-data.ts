import { generate } from 'shortid';

export class SleepData {
	id:string;
	//loggedAt:Date;
	loggedAt:string;

	constructor(loggedAt:string) {
		//Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
		this.id = generate();
		//this.loggedAt = new Date().toISOString();
		this.loggedAt = loggedAt;
	}

	summaryString():string {	//TODO
		return 'Unknown sleep data';
	}

	dateString():string {	//TODO
		//return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
		return "TODO Later";
	}
}
