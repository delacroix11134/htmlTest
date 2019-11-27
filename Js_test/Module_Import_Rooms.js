
//CANT WORK
//import { availableRooms , isRoomFit , isKitchenFit , isLivingRoomFit , isDiningRoomFit } from './Module_Export_Rooms'

//require只能寫一行 多行會被覆蓋

const availableRooms = require('./Module_Export_Rooms.js');
//const testArray = require('./Module_Export_Rooms.js');



function isLivingRoomFit (livingRoomNeed , livingRoom) {
	if ( livingRoomNeed === true && livingRoom === true ) {
		return true;
	} else {
		return false;
	}
}

function isDiningRoomFit (diningRoomNeed , diningRoom) {
	if ( diningRoomNeed === true && diningRoom === true) {
		return true;
	} else {
		return false;
	}
}

function isKitchenFit (kitchenNeed , kitchen) {
	if ( kitchenNeed === true && kitchen === true) {
		return true;
	} else {
		return false;
	}
}

/*
function isRoomFit (roomNeed , rooms) {
	if ( roomNeed <= rooms) {
		return rooms + ' rooms';
	} else {
		return "Do not have enough rooms";
	}
}
*/

//TODO
function isRoomFit (roomNeed , rooms) {
	(roomNeed <= rooms ? true : false);
}

let livingRoomNeed = true;
let diningRoomNeed = true;
let kitchenNeed = true;
let roomNeed = 2;

//console.log(typeof testArray);
//console.log(typeof availableRooms);


//forEach要寫在前面他才會跑
function printRoomsFit() {
     availableRooms.forEach( function(element){
	    console.log( `${element.name} has ${isRoomFit( roomNeed , element.rooms)}` )
		})}

printRoomsFit();
