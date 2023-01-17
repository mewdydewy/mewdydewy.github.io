/*
store location --> document.getElementById("fakey")
				
addEventListener that checks for click on , changes variable wrong in main.js to true
*/				

//import {wrong} from 'main.js';	
console.log(wrongChoice);

const fakeOption = document.getElementById("fakey");

fakeOption.addEventListener("click", makeWrong);

function makeWrong()
{
	console.log("makeWrong() runs!");
	wrongChoice = true;
	//export {wrong};
}

console.log(wrongChoice);

//export {wrong};
