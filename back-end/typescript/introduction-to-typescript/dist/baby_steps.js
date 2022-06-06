"use strict";
let yes = true;
let no = false;
let x = 1;
let string = 'Hello.';
function hello() {
    console.log('Hi.');
}
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 0] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 1] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 2] = "Paused";
})(StudentStatus || (StudentStatus = {}));
let newStudent = StudentStatus.Inactive;
/// MINOR EXERCISES
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 1] = "Sunday";
    WeekDays[WeekDays["Monday"] = 2] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 3] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 4] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 5] = "Thursday";
    WeekDays[WeekDays["Friday"] = 6] = "Friday";
    WeekDays[WeekDays["Saturday"] = 7] = "Saturday";
})(WeekDays || (WeekDays = {}));
var WindRose;
(function (WindRose) {
    WindRose["North"] = "N";
    WindRose["West"] = "W";
    WindRose["East"] = "E";
    WindRose["South"] = "S";
})(WindRose || (WindRose = {}));
