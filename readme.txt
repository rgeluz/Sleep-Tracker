--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--
author: Roman Geluz
email: geluzr@uci.edu
date started: 11/23/2019

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
-1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
	It took several days. In total hours, maybe 20 plus hours spread over two weeks.


3. What online resources did you consult when completing this assignment? (list specific URLs)

	//How to Add A Tab Bar to Your Ionic 4 App	//This was the best video for tab routing
	https://www.youtube.com/watch?v=_BnCRIZ1nDk

	//ion select
	https://ionicframework.com/docs/api/select#single-selection

	//Stanford Sleepiness Scale
	https://web.stanford.edu/~dement/sss.html

	//Ionic 4 Datetime Tutorial
	https://www.youtube.com/watch?v=4SADjzfLqbc

	//convert iso date to milliseconds in javascript
	https://stackoverflow.com/questions/9229213/convert-iso-date-to-milliseconds-in-javascript

	//Access last element of a TypeScript array
	https://stackoverflow.com/questions/31277004/access-last-element-of-a-typescript-array

	//Hexadecimal color 
	https://blogs.msdn.microsoft.com/smallbasic/2015/06/20/the-hex-colors-in-small-basic/

	//ng-circle-progress
	https://www.npmjs.com/package/ng-circle-progress

	//Sleep Needs. How many hours of sleep do you need?
	https://www.helpguide.org/articles/sleep/sleep-needs-get-the-sleep-you-need.htm

	//ion segment
	https://ionicframework.com/docs/api/segment

	//Hide or show custom component
	https://forum.ionicframework.com/t/hide-or-show-custom-component/100639

	//angular *ngIf
	https://angular.io/api/common/NgIf

	//How to Create a Simple Ionic 4 Firebase App with AngularFire
	https://www.youtube.com/watch?v=H20l9ofyR54

	//Firebase Firestore Tutorial #1 - Introduction
	https://www.youtube.com/watch?v=4d-gIPGzmK4

	//Firebase Firestore Tutorial #2 - Setting up Firestore
	https://www.youtube.com/watch?v=UFLvSp4Mh9k

	//ionic storage
	https://ionicframework.com/docs/building/storage

	//ionic storage tutorial
	https://www.techiediaries.com/ionic-storage-tutorial-example/



4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
	Worked on assignment independently. Did not discuss assignment with anyone.


5. Is there anything special we need to know in order to run your code?
	No.


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
	Yes, a design the app with the user intending to enter both beginning and ending times of sleep when they wake up.


7. Did you design your app specifically for iOS or Android, or both?
	I specifically design the app for both.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
	They can log overnight sleep, once they are finish sleeping, they can specify start time/date and end time/date using the respective date picker ui controls.


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
	They can log sleepiness, using a date/time picker and a drop down menu with the Stanford Sleepiness Scale values as options.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
	The app uses a tab navigation with multiple options. One of the options is a view data page and within the page is a toggle to view either overnight sleep data or sleepiness data.


11. Which feature choose--using a native device resource, backing up logged data, or both?
	I choose to do backing up logged data, specifically ionic-storage.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
	n/a


13. If you backed up logged data, where does it back up to?
	I initially used Firebase, however I started implementing it, a few hours before the assignment deadline, and came across compilation errors for importing certain items, thus I resorted to using Ionic Storage.

14. Did you add any "extra" features, such as other data to log, the ability to edit or delete data, or changes to the styling of the app? If so, what did you add? How do these add to the experience of the app?
	I added a circular progress bar for the overnight sleep data and they are enclosed in ion-cards. I added a toast feature when adding a new entry. The main app uses a tab navigation and in the view data tab there I use a ion-segment component to be able to toggle between viewing overnight sleep or sleepiness data.

